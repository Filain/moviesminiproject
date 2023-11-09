import {SetURLSearchParams, useParams} from "react-router-dom";

import {IMovie} from "../../interfases/movieInterfase";
import {FC} from "react";

interface IProps{
    movies: IMovie[],
    page: string,
    setQuery: SetURLSearchParams
}
const SearchContainer:FC<IProps> = () => {
    const {ids}=useParams();


    console.log(ids);
    return (

        <div>
            SearchContainer
        </div>
    );
};

export {SearchContainer};