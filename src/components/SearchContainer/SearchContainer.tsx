import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const SearchContainer = () => {
    const {ids}=useParams();
    const [searchedMovie, setSearchedMovie] = useState()

    console.log(ids);
    return (

        <div>
            SearchContainer
        </div>
    );
};

export {SearchContainer};