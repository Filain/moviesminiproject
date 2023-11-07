import {axiosServise, IRes} from "./axiosServise";
import {IData} from "../interfases/movieInterfase";
import {urls} from "../constans/urls";

const searchServise={
    getBySearch:(query:string, page:string):IRes<IData>=>axiosServise.get(urls.search, {params:{query, page}})
}
export {searchServise}