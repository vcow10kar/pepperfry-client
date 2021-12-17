import {GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING, UPDATE_CART} from './actionTypes';

const initState = {
    cart: [],
    loading: false
}

const reducer = (state = initState, {type, payload}) => {
    console.log("Payload:", payload);
    switch(type) {
        case GET_CART: {
            return {
                ...state,
                cart: payload,
                loading: false
            }
        }

        case ADD_TO_CART: {
            let present = false;
            const temp = state.cart.map(item => {
                console.log(item._id, payload.product._id);
                if (item._id === payload.product._id) {
                   present = true;
                   console.log(true);
                   return {
                       ...item,
                       quantity: item.quantity + payload.quantity
                   }
               } else {
                   return item;
            }})

            console.log(temp, present);

            if(present) {
                return {
                    ...state,
                    cart: [...temp]
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, payload]
                }
            }
        }

        case UPDATE_CART: {
            return {
                ...state,
                cart: [...state.cart.map(item => item._id === payload._id ? {...item, quantity: payload.quantity} : item)]
            }
        }

        case DELETE_FROM_CART: {
            return {
                ...state,
                cart: [...state.cart.filter(item => item._id === payload._id ? false : true)]
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