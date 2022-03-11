import { Component } from 'react';
import styles from './Shop.module.css';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Header from '../Header/Header';
import RenderShop from '../RenderShop/RenderShop';

class Shop extends Component {
    
    
    render() {
        return (
            <>
                <Header/>
                <RenderShop>
                    {(shippingCost, cartProduct, productCounter, handleAddToCart, handleRemoveItem, placeOrder) => (
                        <div className={styles.products}>
                            <Product handler={handleAddToCart}/>
                            <Cart 
                                placeOrder={placeOrder} 
                                productCounter={productCounter} 
                                shippingCost={shippingCost} 
                                cartProducts={cartProduct}/>
                        </div>
                    )}
                </RenderShop>
            </>
        );
    }
}

export default Shop;