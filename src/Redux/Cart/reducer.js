import {GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING} from './actionTypes';

const initState = {
    cart: null,
    loading: false
}

const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case GET_CART: {
            return {
                ...state,
                cart: payload,
                loading: false
            }
        }

        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        }

        case DELETE_FROM_CART: {
            return {
                ...state,
                cart: payload
            }
        }

        case CART_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        default: {
            return state;
        }
    }
}

export {reducer};