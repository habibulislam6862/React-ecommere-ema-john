import React from 'react';
import useShop from '../../hooks/useShop';
import classes from './OrderReview.module.css';
import Cart from './../Cart/Cart';

function OrderReview() {
    const {    shippingCost, 
        cartProduct, 
        productCounter, 
        handleRemoveItem,
        placeOrder
    } = useShop();
    return (
        <>
            <div className={classes.orderReview}>
                        <div className={classes.CartItems}>
                            {cartProduct.map(product => {
                                return (
                                    <div key={product.key} className={classes.singleCartItem}>
                                        <h4>{product.name}</h4>
                                        <span className={classes.price}>${product.price}</span>
                                        <span>Sold by: {product.seller}</span>
                                        <h3>Quantity: {productCounter[product.key]}</h3>
                                        <button onClick={() => handleRemoveItem(product.key)}>Remove Item</button>
                                    </div>
                                )
                            })}
                        </div>

                        <Cart
                            placeOrder={placeOrder}
                            productCounter={productCounter}
                            shippingCost={shippingCost}
                            cartProducts={cartProduct}>
                            <button onClick={placeOrder}>Place Order</button>
                        </Cart>
                
         



            </div>
        </>
    );
}

export default OrderReview;