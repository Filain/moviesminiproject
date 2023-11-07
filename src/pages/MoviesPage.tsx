import {Movies} from "../components/MoviesContainer/Movies";
import {useEffect, useState} from "react";
import {IMovie} from "../interfases/movieInterfase";
import {useSearchParams} from "react-router-dom";
import {movieServise} from "../servises/movieServise";


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