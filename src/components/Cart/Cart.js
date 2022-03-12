import React, { Component } from 'react';
import styles from './Cart.module.css';
import _ from 'lodash';

class Cart extends Component {

    

    render() {

        const {cartProducts, shippingCost, productCounter, placeOrder, children} = this.props;
        
        const totalItemArray = Object.values(productCounter);

        const totalItem = _.sum(totalItemArray);

        const allAddedKeys = Object.keys(productCounter);

        let totalPrice = 0;
        cartProducts.forEach(product => {
            allAddedKeys.forEach( key => {
                if(product.key === key) {
                    totalPrice += _.multiply(productCounter[key], product.price);
                }
            })
        });

        totalPrice = _.round(totalPrice, 2)
         
        // tax will be the 15% of Total Price;
        const tax = _.round(_.multiply(totalPrice, 0.15), 2);

        const totalOrder = _.round((totalPrice + shippingCost + tax), 2)

        return (
            <div className={styles.cart}>
               <h2>Order Summary</h2>
               <div>Item Ordered: {totalItem}</div>
               <div>Total Price: ${totalPrice}</div>
               <div>Shipping Price: ${shippingCost}</div>
               <div>Tax: ${tax}</div>
               <h3>Order Total: ${totalOrder}</h3>
               {children}
            </div>
        );
    }
}

export default Cart;