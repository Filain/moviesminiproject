import {useEffect, useState} from "react";
import {IInfo} from "../../interfases/infoMovie";
import {infoServise} from "../../servises/infoServise";
import {useSearchParams} from "react-router-dom";

const Info = () => {
    const [query, setQuery] = useSearchParams();
    console.log(query.get('id'))
    
//     const [info, setInfo] = useState<IInfo>()
//     useEffect(() => {
// infoServise.getById(id).then(({data})=>setInfo(data))
//     }, []);
    return (

        <div>
            Info
        </div>
    );
};

export {Info};