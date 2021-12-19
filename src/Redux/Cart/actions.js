import axios from 'axios';
import { GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING, UPDATE_CART, UPDATE_ADDRESS } from './actionTypes';

const updateAddress = (payload) => {
    return {
        type: UPDATE_ADDRESS,
        payload: payload
    }
}

const setCartLoading = () => {
    return {
        type: CART_LOADING
    }
}

const getCartItems = (id, user) => (dispatch) => {

    dispatch(setCartLoading());

    if (user === null) {
        return {
            type: GET_CART,
            payload: []
        }
    } else {
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
}

const addToCart = (user, product, quantity) => dispatch => {

    if (user === null) {
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

const updateCartItem = (user, product, quantity) => dispatch => {
    if(user === null) {
        return dispatch({
            type: UPDATE_CART,
            payload: {
                product: product,
                quantity: quantity

            }
        });
    } 
} 

const deleteItem = (user, product) => dispatch => {
    if(user === null) {
        return dispatch({
            type: DELETE_FROM_CART,
            payload: product._id
        })
    }
}

export { addToCart, getCartItems, updateCartItem, deleteItem, updateAddress };