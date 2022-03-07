import React, { Component } from 'react';
import styles from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'


class Search extends Component {
   
    render() {
        const {handleSearch} = this.props;
        return (
            <div className={styles.searchContainer}>
                <input onChange={handleSearch} type="text" />
                <FontAwesomeIcon icon={faCartShopping} />
                <div className={styles.cartCount}>0</div>
            </div>
        );
    }
}

export default Search;