import styles from './Shop.module.css';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import useShop from '../../hooks/useShop';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate();
    const {shippingCost, cartProduct, productCounter, handleAddToCart, placeOrder} = useShop();
    return (
        <>
                    <div className={styles.products}>
                        <Product handler={handleAddToCart}/>
                        <Cart 
                            placeOrder={placeOrder} 
                            productCounter={productCounter} 
                            shippingCost={shippingCost} 
                            cartProducts={cartProduct}> <button onClick={ () => navigate("/order-review") }>Review Order</button> </Cart>
                    </div>
        </>
    );
}

export default Shop;