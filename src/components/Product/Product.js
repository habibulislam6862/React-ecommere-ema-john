import React, { Component } from 'react';
import styles from './Product.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Search from './../Search/Search';
import Rating from 'react-rating';


class Product extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: [],
            searchText: "",
            searchProducts: []
        }
        this.handleSearch = this.handleSearch.bind(this);
    }


    componentDidMount(){
        fetch("./products.json")
        .then(res => res.json())
        .then(data => {
            
               this.setState({products: data});
               this.setState({searchProducts:data})
        
        });

    }

    handleSearch(event){
        const {products, searchText} = this.state;
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
        this.setState({searchText: event.target.value});
        this.setState({searchProducts: filteredProducts})
        if(event.target.value.length === 0 ) {
            this.setState({searchProducts: products})
        }
    }

    render() {
        const {searchProducts} = this.state;
        
        return (
            <>
            <Search handleSearch={this.handleSearch}/>
            <div className={styles.product}>
              {searchProducts.map(product => {
                  return (
                      <div key={product.key} className={styles.singleProduct}>
                          <div>
                            <img src={product.img} alt="" />
                          </div>
                          <div>
                              <div className={styles.prodcutName}><h2>{product.name}</h2></div>
                              <div style={{display: 'flex', columnGap: '50px'}}>
                                <div>
                                    <div>By: {product.seller}</div>
                                    <div><h3>${product.price}</h3></div>
                                    <div><h4>only {product.stock} left in stock - order soon</h4></div>
                                    <button onClick={() => this.props.handler(product)}><FontAwesomeIcon icon={faCartShopping} /> Add To cart</button>
                                </div>
                                <div>
                                 <div className={styles.rating}>
                                    <Rating 
                                    readonly
                                    emptySymbol="fa-regular fa-star"
                                    fullSymbol="fa-solid fa-star"
                                    initialRating={product.star}
                                    />
                                 </div>
                                    <h3>Feature</h3>
                                    <ul>
                                        {product.features.map((feature, index) => {
                                            return (
                                                <li key={index}>{feature.description}: {feature.value}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                              </div>
                          </div>
                      </div>
                  )
              })}
            </div>
            </>
        );
    }
}

export default Product;