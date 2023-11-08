import {useForm} from "react-hook-form";
import {searchServise} from "../../servises/searchServise";
import {useNavigate, useSearchParams} from "react-router-dom";
import {ISearchWord} from "../../interfases/searchInterfase";
import {useEffect, useState} from "react";
import {axiosServise, IRes} from "../../servises/axiosServise";
import {IInfo} from "../../interfases/infoMovie";
import {urls} from "../../constans/urls";
import {infoServise} from "../../servises/infoServise";

interface IProps {

}

const SearchForm = () => {
    const {handleSubmit, reset, register} = useForm()

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    const navigate = useNavigate()



    const search = async (query:ISearchWord) => {



        const {data}=await searchServise.getBySearch(query.word, page);
        console.log('data', data)
        const ids=data.results.map(movieId=>movieId.id)

        console.log(ids)







        navigate(`${ids}`)
    };






    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'Movie'} {...register('word')}/>
            <button>Search</button>
        </form>
    );
};

export {SearchForm};


