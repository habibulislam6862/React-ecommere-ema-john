import { Component } from 'react';
import Header from '../Header/Header';
import RenderShop from '../RenderShop/RenderShop';
import classes from './OrderReview.module.css';
import Cart from './../Cart/Cart';
import congrats from '../../images/giphy.gif';

class OrderReview extends Component {

   
    render() {
        return (
            <>
               <Header/>
               <div className={classes.orderReview}>
                  
                    <RenderShop>
                    
                   
                        {(shippingCost,
                        cartProduct,
                        productCounter,
                        handleAddToCart,
                        handleRemoveItem,
                        placeOrder,
                        orderPlace) => {
                            return !orderPlace ? (
                                <>
                            <div className={classes.CartItems}>
                                {cartProduct.map( product => {
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
                                cartProducts={cartProduct}/> 
                                </>
                            ) : <img src={congrats} alt="Congratulation" /> 
                        }}
                    </RenderShop>

                   
               </div>
            </>
        );
    }
}

export default OrderReview;