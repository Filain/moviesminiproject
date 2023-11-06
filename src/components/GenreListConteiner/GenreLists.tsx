import {useEffect, useState} from "react";
import {IMovie} from "../../interfases/movieInterfase";
import {genresServise} from "../../servises/genresServise";
import {useParams, useSearchParams} from "react-router-dom";
import {Movie} from "../MoviesContainer/Movie";

const GenreLists = () => {
    const [moviesGanre, setMoviesGanre] = useState<IMovie[]>([])
    const {id}=useParams<string>()
    console.log(id);
    const [query, setQuery] = useSearchParams({page:'1'});
    const page=query.get('page');

    useEffect(() => {
        genresServise.getByIdMovie(page, id).then(({data:{results}})=>setMoviesGanre(results))
    }, [query.get('page')]);

    console.log(moviesGanre)

    const prev = () => {
        setQuery(prev=>{
            prev.set('page', `${+prev.get('page')-1}`)
            return prev
        })
    };

    const next = () => {
        setQuery(prev=>{
            prev.set('page', `${+prev.get('page')+1}`)
            return prev
        })

    };

    return (
        <div>

            <div>

            </div>

                <div>  <button disabled={page==='1'} onClick={prev}>prev</button>
                <button disabled={page==='500'} onClick={next}>next</button></div>


        </div>
    );
};

export {GenreLists};