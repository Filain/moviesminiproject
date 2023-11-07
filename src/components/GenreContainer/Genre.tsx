import {IGenres} from "../../interfases/genresInterfase";
import {FC} from "react";
import {useNavigate} from "react-router-dom";


interface IProps {
    genre: IGenres

}

const Genre: FC<IProps> = ({genre}) => {
    const {name, id} = genre;
    const navigate = useNavigate()


    const press = () => {
        navigate(`${id}`)
    };

    return (
        <div>
        <div onClick={press}>
            {name}
        </div>

        </div>
    );
};

export {Genre};