import { GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING, UPDATE_CART, UPDATE_ADDRESS } from './actionTypes';

let cartItems = localStorage.getItem('cart');
let address = JSON.parse(localStorage.getItem('address'));

if (cartItems === null) {
    localStorage.setItem('cart', JSON.stringify([]));
    cartItems = [];
}

if (address === null) {
    localStorage.setItem('address', JSON.stringify(null));
}

const initState = {
    cart: JSON.parse(cartItems),
    loading: false,
    address: address
}

const reducer = (state = initState, { type, payload }) => {
    console.log("Payload:", type, payload);
    switch (type) {
        case GET_CART: {
            return {
                ...state,
                cart: payload,
                loading: false
            }
        }

        case ADD_TO_CART: {
            let present = false;
            let temp = [];
            if (state.cart.length !== 0) {
                temp = state.cart.map(item => {

                    if (item.product._id === payload.product._id) {
                        present = true;
                        return {
                            ...item,
                            quantity: item.quantity + payload.quantity
                        }
                    } else {
                        return item;
                    }
                })
            }

            if (present) {
                localStorage.setItem('cart', JSON.stringify(temp));
                return {
                    ...state,
                    cart: [...temp]
                }
            } else {
                localStorage.setItem('cart', JSON.stringify([...state.cart, payload]));
                return {
                    ...state,
                    cart: [...state.cart, payload]
                }
            }
        }

        case UPDATE_CART: {
            const temp = state.cart.map(item => {
                if (item.product._id === payload.product._id) {
                    return {
                        ...item,
                        quantity: payload.quantity
                    }
                } else {
                    return item;
                }
            })
            
            localStorage.setItem('cart', JSON.stringify(temp));
            return {
                ...state,
                cart: [...temp]
            }
        }

        case DELETE_FROM_CART: {
            const temp = [...state.cart.filter(item => item.product._id === payload ? false : true)]
            localStorage.setItem('cart', JSON.stringify(temp));
            return {
                ...state,
                cart: [...temp]
            }
        }

        case CART_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case UPDATE_ADDRESS: {
            localStorage.setItem('address', JSON.stringify(payload));
            return {
                ...state,
                address: payload
            }
        }

        default: {
            return state;
        }
    }
}

export { reducer };