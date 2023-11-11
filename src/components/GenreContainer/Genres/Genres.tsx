import {useEffect, useState} from "react";

import {IGenres} from "../../../interfases";
import {genresServise} from "../../../servises";
import {Genre} from "../Genre";

import css from './Genres.module.css'

const Genres = () => {
    const [genres, setGenres] = useState<IGenres[]>([])
    // console.log(genres);
    useEffect(() => {
        genresServise.getAll().then(({data})=>setGenres(data.genres))
    }, []);
    return (
        <div className={css.genres_wrap}>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};