import {IGenres} from "../../interfases/genresInterfase";
import {FC} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import css from './Genre.module.css'

interface IProps {
    genre: IGenres

}

const Genre: FC<IProps> = ({genre}) => {
    const {name, id} = genre;
    const navigate = useNavigate()


    const press = () => {
        navigate(`${id}`)
    };

    // return (
    //     <div>
    //     <div onClick={press} className={css.genre_button}>
    //         {name}
    //     </div>
    //
    //     </div>
    // );
    return (
        <div>
            <NavLink to={`/genres/${id}`} className={css.genre_button} >
                {name}
            </NavLink>
        </div>)


};

export {Genre};