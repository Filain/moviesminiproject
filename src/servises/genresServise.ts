import {axiosServise, IRes} from "./axiosServise";
import {IGenreList} from "../interfases/genresInterfase";
import {urls} from "../constans/urls";
import {IData} from "../interfases/movieInterfase";

const genresServise={
    getAll:():IRes<IGenreList>=>axiosServise.get(urls.genre),
    getByIdMovie:(page:string, with_genres:string):IRes<IData>=>axiosServise.get(urls.movies, {params:{page, with_genres}})
}
export {genresServise}