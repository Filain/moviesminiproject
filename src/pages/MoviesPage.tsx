import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {movieServise} from "../servises";
import {Movies} from "../components/MoviesContainer/Movies";
import {IMovie} from "../interfases";


const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page:'1'});
    const page=query.get('page');


    useEffect(() => {
        movieServise.getAll(page).then(({data:{results}})=>setMovies(results))
    }, [page]);

    return (
        <div>
            <Movies page={page} movies={movies} setQuery={setQuery}/>
        </div>
    );
};

export {MoviesPage};