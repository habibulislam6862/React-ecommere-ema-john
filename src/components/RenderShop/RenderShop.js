import { Component } from 'react';
import { deleteSingleData, getStorageData, isStorage, setData, setSingleCounter, setSingleData } from '../../lib/localStorageAccess';
import _ from 'lodash';

class RenderShop extends Component {

    constructor(props){
        super(props);

        // Shop State
        this.state = {
            cartProduct: [],
            shippingCost: 0,
            productCounter: {},
            orderPlace: false
        }

        // bind all the eventHandler
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.placeOrder = this.placeOrder.bind(this);

        // storage keys
        this.cartKey = "product_cart";
        this.counterKey = "product_counter";
    }

    updateStateOnStorageChanges() {
        if(isStorage(this.cartKey) && isStorage(this.counterKey)) {

            // get Product from storage
            const productDataObject = getStorageData(this.cartKey);
            const prodcutDataValue = Object.values(productDataObject);

            // get Product counter from storage
            const productCounterObject = getStorageData(this.counterKey);

            //get Total Item from storage
            const totalItem = _.sum(Object.values(productCounterObject));
            
            // setting up state when component did mount or add to cart button clicked
            this.setState({
                cartProduct: prodcutDataValue,   
                productCounter: productCounterObject,
                shippingCost: totalItem * 5 >= 20 ? 20 : totalItem * 5
            });
        }
    }

    componentDidMount(){
        this.updateStateOnStorageChanges();
    }

    placeOrder(){
        this.setState({
            orderPlace: true
        })
    }

    handleRemoveItem(productKey){
        const storageKeys = ['product_cart', 'product_counter']
        storageKeys.forEach( storageKey => {
            deleteSingleData(storageKey, productKey);
        })
        this.updateStateOnStorageChanges();
    }

    handleAddToCart(data){
        if(!isStorage(this.cartKey)) {
            setData(this.cartKey, {});
        }

        if(!isStorage(this.counterKey)) {
            setData(this.counterKey, {});
        }

        setSingleData(this.cartKey, data);
        setSingleCounter(this.counterKey, data);

        this.updateStateOnStorageChanges()
    }


    render() {
        const {shippingCost, cartProduct, productCounter, orderPlace} = this.state;
        const {children} = this.props;
        return children(
                    shippingCost, 
                    cartProduct, 
                    productCounter, 
                    this.handleAddToCart, 
                    this.handleRemoveItem,
                    this.placeOrder,
                    orderPlace
                );
    }
}

export default RenderShop;