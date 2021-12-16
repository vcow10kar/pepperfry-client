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

const addToCart = (id, product, quantity) => dispatch => {
    if(id === null) {
        return {
            type: ADD_TO_CART,
            payload: product
        }
    } else {
        axios.post({
            url: `http:localhost:5000/cartDetails`,
            data: {
                cart_id: id,
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