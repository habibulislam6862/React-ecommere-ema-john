import styles from './Shop.module.css';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Header from '../Header/Header';
import RenderShop from '../RenderShop/RenderShop';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate();
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
                            cartProducts={cartProduct}> <button onClick={ () => navigate("/order-review") }>Review Order</button> </Cart>
                    </div>
                )}
            </RenderShop>
        </>
    );
}

export default Shop;