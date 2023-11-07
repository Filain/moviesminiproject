import {FC} from "react";
import {IMovie} from "../../interfases/movieInterfase";
import {Movie} from "./Movie";
import css from './Movies.module.css'
import {SetURLSearchParams} from "react-router-dom";

interface IProps{
    movies: IMovie[],
    page: string,
    setQuery: SetURLSearchParams
}

const Movies:FC<IProps> = ({movies,setQuery,page}) => {

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