import React from 'react';
import {Link , NavLink , useNavigate} from "react-router-dom";
import classes from '../header/header.module.css'

function Footer(props) {
    const navigate = useNavigate()

    const backTo =()=>{
        navigate(-1)
    }

    return (
        <div className='menu' >
            <ul  className='menuWrapper' >
                <button onClick={backTo} > Back </button>
                <li><NavLink to='MainPage' className={classes.link}>Main Page</NavLink></li>
                <li> <NavLink to='SecondPage' className={classes.link} >Second Page</NavLink> </li>
                <li> <NavLink to='ThirdPage' className={classes.link}>Third Page</NavLink></li>
            </ul>

        </div>
    );
}

export default Footer;