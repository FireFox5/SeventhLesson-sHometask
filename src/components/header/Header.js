import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import classes from '../header/header.module.css'

function Header(props) {
    return (
        <div className='menu' >
            <ul className='menuWrapper' >
                <li><NavLink to='MainPage' className={classes.link} >Main Page</NavLink></li>
                <li><NavLink to='SecondPage' className={classes.link}>Second Page</NavLink></li>
                <li><NavLink to='ThirdPage' className={classes.link} >Third Page</NavLink></li>

            </ul>
        </div>
    );
}

export default Header;