import {IData} from "../interfases/movieInterfase";
import {axiosServise, IRes} from "./axiosServise";
import {urls} from "../constans/urls";

const movieServise={
    getAll:(page:string):IRes<IData> => axiosServise.get(urls.movies, {params:{page}})
}

export {
    movieServise
}