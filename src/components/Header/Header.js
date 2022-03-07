import React, { Component } from 'react';
import logo from '../../images/logo.png';
import styles from "./Header.module.css";

class Header extends Component {
    render() {
        
        return (
            <><div className={styles.logo}>
                <img  src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="http://google.com">Shop</a></li>
                    <li><a href="http://google.com">Order review</a></li>
                    <li><a href="http://google.com">Manage inventory here</a></li>
                </ul>
            </nav>
            
            </>
        );
    }
}

export default Header;