import {IInfo} from "../../interfases/infoMovie";
import {FC} from "react";

interface IProps {
    info:IInfo
}
const InfoMovieDat:FC<IProps> = ({info}) => {
    const{id,title,poster_path}=info
    console.log(title)
    console.log(id)
    return (
        <div>
            <div>{title}</div>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
        </div>
    );
};

export {InfoMovieDat};