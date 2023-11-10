import {IInfo} from "../../interfases/infoMovie";
import {FC} from "react";

import {Rating} from "@mui/material";
import css from './InfoMovieDat.module.css'

interface IProps {
    info:IInfo
}
const InfoMovieDat:FC<IProps> = ({info}) => {
    const{id,title,poster_path,overview, genres,release_date,vote_average}=info
    console.log(title)
    console.log(id)
    return (
        <div className={css.wrap}>
            <div className={css.title}>{title}</div>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <br/>
            <Rating className={css.Rating} name="customized-10" defaultValue={vote_average} precision={0.1} max={10} size="small" readOnly />
            <div>{overview}</div>
            <div>{genres.map((genre, index)=><span key={genre.id}>{genre.name} </span>)}</div>

<div>{release_date}</div>
        </div>
    );
};

export {InfoMovieDat};