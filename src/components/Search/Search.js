import React, { Component } from 'react';
import styles from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { getStorageData } from '../../lib/localStorageAccess';
import _ from 'lodash'

class Search extends Component {
   
    render() {
        const items = _.isEmpty(getStorageData("product_counter")) ? [] : Object.values(getStorageData("product_counter"));
        const totalItem = _.sum(items);

        const {handleSearch} = this.props;
        return (
            <div className={styles.searchContainer}>
                <input onChange={handleSearch} type="text" />
                <FontAwesomeIcon icon={faCartShopping} />
                <div className={styles.cartCount}>{totalItem}</div>
            </div>
        );
    }
}

export default Search;