import React, { Component } from 'react';
import styles from './Products.module.css';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartProduct: [],
            shippingCost: 0,
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    
    handleAddToCart(data){
        this.setState(prevState => {
            return {
                cartProduct: [...prevState.cartProduct, data],
                shippingCost: (prevState.shippingCost + 5 <= 20) ? prevState.shippingCost + 5 : prevState.shippingCost,
            }
        });
    }

    

    
    render() {
        
      
        const {shippingCost, cartProduct} = this.state;
        return (
            <>
            
                <div className={styles.products}>
                    <Product getAllProducts={this.getAllProducts} handler={this.handleAddToCart}/>
                    <Cart shippingCost={shippingCost} cartProducts={cartProduct}/>
                </div>
            </>
        );
    }
}

export default Products;