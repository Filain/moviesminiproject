import {SearchForm} from "../components/SearchContainer/SearchForm";
import {useEffect, useState} from "react";
import {IMovie} from "../interfases/movieInterfase";
import {searchServise} from "../servises/searchServise";
import {useSearchParams} from "react-router-dom";
import {Movies} from "../components/MoviesContainer/Movies";

const SearchPage = () => {
    const [movie, setMovie] = useState<IMovie[]>([])
    const [word, setWord] = useState<string>(null)
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    useEffect(() => {
        searchServise.getBySearch(word, page).then(({data})=>setMovie(data.results))
    }, [word, page]);
    console.log('movie', movie);

    return (
        <div >
            <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}><SearchForm setWord={setWord}/></div>

            <Movies page={page} movies={movie} setQuery={setQuery} />
        </div>
    );
};

export {SearchPage};