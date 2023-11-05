import {useEffect, useState} from "react";
import {IData, IMovie} from "../../interfases/movieInterfase";
import {movieServise} from "../../servises/movieServise";
import {Movie} from "./Movie";
import css from './Movies.module.css'
import {useSearchParams} from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page:'1'});
    const page=query.get('page');


    useEffect(() => {
        movieServise.getAll(page).then(({data:{results}})=>setMovies(results))
    }, [query.get('page')]);


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
          <div className={css.Wrap}>{movies.map(movie=><Movie key={movie.id} movie={movie}/>)}</div>
        <div>
        <button disabled={page==='1'} onClick={prev}>prev</button>
        <button disabled={page==='500'} onClick={next}>next</button></div>
        </div>
    );
};

export {Movies};