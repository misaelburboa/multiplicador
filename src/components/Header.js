import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true} >Inicio</NavLink>
            <NavLink to="/register" activeClassName="is-active">Cambiar Nombre De Jugador</NavLink>
        </nav>
    );
}

export default Header;