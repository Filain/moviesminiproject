import {axiosServise, IRes} from "./axiosServise";

import {urls} from "../constans";
import {IData} from "../interfases";

const movieServise={
    getAll:(page:string):IRes<IData> => axiosServise.get(urls.movies, {params:{page}})
}

export {
    movieServise
}