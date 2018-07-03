import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true} >Inicio</NavLink>
            <NavLink to="/register" activeClassName="is-active">Register User</NavLink>
        </nav>
    );
}

export default Header;