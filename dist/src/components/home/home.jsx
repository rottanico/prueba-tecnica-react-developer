import React from "react";
import Style from './home.module.css';
import { Link } from 'react-router-dom'
import img from './placeholder.png'
export default function Home() {


    return (
        <div className={Style.container}>
            <Link className={Style.card} to='/Movies'>               
                <img src={img} alt='No img' />
                <label>Movies</label>               
            </Link>
            <Link  className={Style.card} to='/Series'>
            <img src={img} alt='No img' />
                <label>Series</label>
            </Link>
        </div>
    )
}