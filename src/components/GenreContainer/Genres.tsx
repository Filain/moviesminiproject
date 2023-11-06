import {useEffect, useState} from "react";
import {IGenres} from "../../interfases/genresInterfase";
import {genresServise} from "../../servises/genresServise";
import {Genre} from "./Genre";

const Genres = () => {
    const [genres, setGenres] = useState<IGenres[]>([])
    useEffect(() => {
        genresServise.getAll().then(({data})=>setGenres(data.genres))
    }, []);
    console.log(genres)
    return (
        <div>
            {genres.map(genre=><Genre genre={genre}/>)}
        </div>
    );
};

export {Genres};