import {IInfo} from "../../interfases/infoMovie";
import {FC} from "react";

interface IProps {
    info:IInfo
}
const InfoMovieDat:FC<IProps> = ({info}) => {
    const{id,title}=info
    console.log(title)
    console.log(id)
    return (
        <div>
            <div>{title}</div>
            <div>{id}</div>
        </div>
    );
};

export {InfoMovieDat};