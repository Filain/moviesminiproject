import {useEffect, useState} from "react";
import {IMovie} from "../../interfases/movieInterfase";
import {genresServise} from "../../servises/genresServise";
import {useParams, useSearchParams} from "react-router-dom";
import {Movies} from "../MoviesContainer/Movies";

import css from './GenreLists.module.css'


const GenreLists = () => {
    const [moviesGanre, setMoviesGanre] = useState<IMovie[]>([])
    const {id}=useParams<string>()
    console.log(id);
    const [query, setQuery] = useSearchParams({page:'1'});
    const page=query.get('page');

    useEffect(() => {
        genresServise.getByIdMovie(page, id).then(({data:{results}})=>setMoviesGanre(results))
    }, [page, id]);

    console.log(moviesGanre)


    return (
        <div>
            <Movies  page={page} movies={moviesGanre} setQuery={setQuery}/>
        </div>
    );
};

export {GenreLists};
