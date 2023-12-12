import React from 'react';
import {Link} from "react-router-dom";
import cart from '../../assets/images/cart.png';
import style from './Navbar.module.scss';

const Navbar:React.FC = () => {
    return (
        <nav className={style.nav}>
            <Link to='/'>Main</Link>
            <Link to='/login'>Sing in</Link>
            <img src={cart} alt=""/>
        </nav>
    );
};

export default Navbar;