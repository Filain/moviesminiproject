import {axiosServise, IRes} from "./axiosServise";

import {IInfo} from "../interfases/infoMovie";
import {urls} from "../constans/urls";

const infoServise={
    getById:(id:string):IRes<IInfo> => axiosServise.get(urls.info.byId(+id))
}

export {
    infoServise
}