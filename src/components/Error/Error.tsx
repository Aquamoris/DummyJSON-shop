import React from 'react';
import errorImg from '../../assets/images/404-error-scaled.jpeg';
import style from './Error.module.scss';

const Error:React.FC = () => {
    return (
        <img className={style.error} src={errorImg} alt="404 not found"/>
    );
};

export default Error;