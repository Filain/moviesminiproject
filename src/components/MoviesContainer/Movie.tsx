
import {FC} from "react";
import {IMovie} from "../../interfases/movieInterfase";

import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {original_title,poster_path,id}=movie;
    const navigate = useNavigate();

    const nav = () => {
        navigate(`/info/${id}`)



    }
    return (
        <div className={css.Movie} onClick={nav}>

            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} style={{width:"200px"}}/>
            <p>{original_title}</p>



        </div>
    );
};

export {Movie};


