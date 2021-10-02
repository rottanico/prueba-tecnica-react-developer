import React from 'react';
import './navbar.css'


    export default function Navbar(){

        return (
        <header >
             <nav>
            <input type="checkbox" id="ckbox"/>
            <label htmlFor="ckbox" className="drawer">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </label>
            <h2>DEMO Streaming</h2>

            <ul className="menu-box">
                <li><a href="#" className="fa"> Log In</a></li>
                <li><a href="#" className="fa">  Start your free trial</a></li>
                <li><a href="/home" className="fa">  Home</a></li>
            </ul>
        </nav>
        </header>) 
    }