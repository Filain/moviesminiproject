import {Genres} from "../components/GenreContainer/Genres";
import {Outlet} from "react-router-dom";

const GenresPage = () => {
    return (
        <div>
            <Genres/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};