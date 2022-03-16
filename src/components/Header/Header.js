import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from "./Header.module.css";
import useAuth from './../../hooks/useAuth';

function Header() {
    const {logout, user} = useAuth();
    return (
        <><div className={styles.logo}>
            <img  src={logo} alt="Logo" />
        </div>
        <nav>
            <ul>
                <li><NavLink to="/">Shop</NavLink></li>
                <li><NavLink to="/order-review">Order review</NavLink></li>
                <li><NavLink to="/shipping">Shipping</NavLink></li>
                {
                !user.email 
                ? <>
                    <li><NavLink to="/login">Signin</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    </>
                : <>
                    <li><button onClick={logout}>LogOut</button></li>
                    <span style={{color: 'white', fontSize: 25}}>({user.displayName || localStorage.getItem("displayName") })</span>
                    </>
                }
            </ul>
        </nav>
        
        </>
    );
}

export default Header;