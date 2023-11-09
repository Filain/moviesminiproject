
import {FC} from "react";
import {IMovie} from "../../interfases/movieInterfase";

import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";

interface IProps {
    movie: IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {original_title,poster_path,id,vote_average}=movie;
    const navigate = useNavigate();


    const nav = () => {
        navigate(`/info/${id}`)



    }
    return (
        <div className={css.Movie} onClick={nav}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} style={{width:"200px"}}/>

            <Rating className={css.Rating} name="customized-10" defaultValue={vote_average} precision={0.1} max={10} size="small" readOnly />
            <p>{original_title}</p>


        </div>
    );
};

export {Movie};


