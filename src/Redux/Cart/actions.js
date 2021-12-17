import axios from 'axios';
import {GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING} from './actionTypes'; 

const setCartLoading = () => {
    return {
        type: CART_LOADING
    }
}

const getCartItems = (id) => (dispatch) => {

    dispatch(setCartLoading());

    axios.get(`http:localhost:5000/cartDetails/${id}`)
    .then(res => {
        return {
            type: GET_CART,
            payload: res.data
        };
    })
    .catch(err => {
        console.log('Error:', err);
    })
}

const addToCart = (user, product, quantity) => dispatch => {

    console.log(user, product, quantity);
    if(user === null) {
        return dispatch({
            type: ADD_TO_CART,
            payload: {
                product: product,
                quantity: quantity
            }
        })
    } else {
        axios.post({
            url: `http:localhost:5000/cartDetails`,
            data: {
                cart_id: user._id,
                product_id: product.product_id,
                quantity: quantity
            }
        })
        .then(res => {
            return {
                type: ADD_TO_CART,
                payload: res.data
            }
        })
        .catch(err => {
            console.log('Error:', err);
        })
    }
    
}

export {addToCart, getCartItems};