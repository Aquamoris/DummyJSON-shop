import React from 'react';
import {Link} from "react-router-dom";
import style from './Navbar.module.scss';

const Navbar:React.FC = () => {
    return (
        <nav className={style.nav}>
            <Link to='/'>Main</Link>
        </nav>
    );
};

export default Navbar;