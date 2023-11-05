import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            Header
            <div>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
                <NavLink to={'/search'}>Search</NavLink>    
            </div>
            <div>Theme <input type={"checkbox"}/> </div>
            <div ><img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="user" className={css.Image}/></div>
            
        </div>
    );
};

export {Header};