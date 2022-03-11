import { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                    <li><NavLink to="/">Shop</NavLink></li>
                    <li><NavLink to="/order-review">Order review</NavLink></li>
                    <li><NavLink to="/manage">Manage inventory here</NavLink></li>
                </ul>
            </nav>
            
            </>
        );
    }
}

export default Header;