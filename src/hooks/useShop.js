import {useState, useEffect} from 'react';
import { deleteSingleData, getStorageData, isStorage, setData, setSingleCounter, setSingleData } from '../lib/localStorageAccess';
import _ from 'lodash';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

function useShop() {
    // get user
    const {user} = useAuth();

    // all states
    const [cartProduct, setCartProduct] = useState([]);
    const [shippingCost, setShippingCost] = useState(0);
    const [productCounter, setProductCounter] = useState({});
    const [orderPlace, setOrderPlace] = useState(false);



    // storage keys
    const cartKey = "product_cart";
    const counterKey = "product_counter";


    function updateStateOnStorageChanges() {
        if(isStorage(cartKey) && isStorage(counterKey)) {

            // get Product from storage
            const productDataObject = getStorageData(cartKey);
            const prodcutDataValue = Object.values(productDataObject);

            // get Product counter from storage
            const productCounterObject = getStorageData(counterKey);

            //get Total Item from storage
            const totalItem = _.sum(Object.values(productCounterObject));
            
            // setting up state when component did mount or add to cart button clicked
            setCartProduct(prodcutDataValue);
            setProductCounter(productCounterObject);
            setShippingCost(totalItem * 5 >= 20 ? 20 : totalItem * 5);
            
        }
    }

    useEffect(()=>{
        updateStateOnStorageChanges();
    }, [])


    const navigate = useNavigate()

    function placeOrder(){
        setOrderPlace(true);
        if(user.email) {
            navigate('/shipping')
        } else {
            navigate('/login', {state: {from: {pathname: '/shipping'}}})
        }
    }

    function handleRemoveItem(productKey){
        const storageKeys = ['product_cart', 'product_counter']
        storageKeys.forEach( storageKey => {
            deleteSingleData(storageKey, productKey);
        })
        updateStateOnStorageChanges();
    }

    function handleAddToCart(data){
        if(!isStorage(cartKey)) {
            setData(cartKey, {});
        }

        if(!isStorage(counterKey)) {
            setData(counterKey, {});
        }

        setSingleData(cartKey, data);
        setSingleCounter(counterKey, data);

        updateStateOnStorageChanges()
    }


    
    
    return {    shippingCost, 
                cartProduct, 
                productCounter, 
                handleAddToCart, 
                handleRemoveItem,
                placeOrder,
                orderPlace
            };

}

export default useShop;