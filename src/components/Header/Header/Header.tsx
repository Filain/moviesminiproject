import {NavLink} from "react-router-dom";

import {ThemSwicher} from "../ThemSwicher";

import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.Header}>
            The Movie Database
            <div>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres/:id'}>Genres</NavLink>
                <NavLink to={'/search'}>Search</NavLink>
            </div>
            <div><span className={css.theme}>Theme</span>
            <ThemSwicher/> </div>
            <div ><img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="user" className={css.Image}/></div>
            
        </div>
    );
};

export {Header};