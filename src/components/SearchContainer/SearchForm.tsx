import {useForm} from "react-hook-form";
import {searchServise} from "../../servises/searchServise";
import {useSearchParams} from "react-router-dom";
import {ISearchWord} from "../../interfases/searchInterfase";

interface IProps {

}

const SearchForm = () => {
    const {handleSubmit, reset, register} = useForm()

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    const search = async (query:ISearchWord) => {

        console.log(query)
        const {data}=await searchServise.getBySearch(query.word, page);
        console.log(data)
    };




    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'Movie'} {...register('word')}/>
            <button>Search</button>
        </form>
    );
};

export {SearchForm};


