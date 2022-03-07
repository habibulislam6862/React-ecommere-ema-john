import React, { Component } from 'react';
import styles from './Cart.module.css';

class Cart extends Component {

    

    render() {

        const {cartProducts, shippingCost} = this.props;
        const totalPrice = Math.round(cartProducts.reduce((total, prev)=> total + prev.price, 0));
        const tax = Math.round(totalPrice * 0.15);
        const total = totalPrice + shippingCost + tax;

        // shipping price will be add 5 + 5 + 5 for each order, but can't cross 20 dollar. 
        // tax will be the 15% of Total Price;
        return (
            <div className={styles.cart}>
               <h2>Order Summary</h2>
               <div>Item Ordered: {cartProducts.length}</div>
               <div>Total Price: ${totalPrice}</div>
               <div>Shipping Price: ${shippingCost}</div>
               <div>Tax: ${tax}</div>
               <h3>Order Total: ${total}</h3>
            </div>
        );
    }
}

export default Cart;