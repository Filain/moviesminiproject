import {useForm} from "react-hook-form";
import {ISearchWord} from "../../interfases/searchInterfase";
import {FC} from "react";
import css from "./SearchForm.module.css";

interface IProps {
    setWord:(setWord:string)=>void
}

const SearchForm:FC<IProps> = ({setWord}) => {
    const {handleSubmit, reset, register} = useForm()
    // const navigate = useNavigate()


    const search = (query: ISearchWord) => {
        setWord(query.word)
        reset()
        // navigate(`${query.word}`)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input className={css.input} type="text" placeholder={'Movie'} {...register('word')}/>
                <button className={css.button}>Search</button>
            </form>

        </div>
    );
};

export {SearchForm};


