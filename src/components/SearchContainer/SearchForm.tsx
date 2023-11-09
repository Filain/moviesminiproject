import {useForm} from "react-hook-form";
import {searchServise} from "../../servises/searchServise";
import {useNavigate, useSearchParams} from "react-router-dom";
import {ISearchWord} from "../../interfases/searchInterfase";
import {useEffect, useState} from "react";

import {SearchContainer} from "./SearchContainer";
import {IMovie} from "../../interfases/movieInterfase";
import {Movies} from "../MoviesContainer/Movies";

interface IProps {

}

const SearchForm = () => {
    const {handleSubmit, reset, register,getValues} = useForm()
    const navigate = useNavigate()


    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    console.log(page)

    const [movie, setMovie] = useState<IMovie[]>([])

    const search = async (query: ISearchWord) => {
        const {data} = await searchServise.getBySearch(query.word, page);
        console.log('data', data.results)
        setMovie(data.results)
        reset()
        // navigate(`${query.word}`)
    };





    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type="text" placeholder={'Movie'} {...register('word')}/>
                <button>Search</button>
            </form>
            <Movies page={page} movies={movie} setQuery={setQuery} />
        </div>
    );
};

export {SearchForm};


