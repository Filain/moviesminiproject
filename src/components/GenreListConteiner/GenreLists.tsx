import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfases";
import {genresServise} from "../../servises";
import {Movies} from "../MoviesContainer/Movies";




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
