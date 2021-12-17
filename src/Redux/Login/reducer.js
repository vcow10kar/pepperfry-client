import {USER_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR} from './actionTypes';

let userDetails = JSON.parse(localStorage.getItem('userDetails'));

if(userDetails === null) {
    localStorage.setItem('userDetails', JSON.stringify(null));
    userDetails = null;
} else {
    userDetails = userDetails.data;
}

const initState = {
    isAuthenticated: null,
    isLoading: false,
    user: userDetails
}

const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case USER_LOADING: {
            return {
                ...state,
                isLoading: true,
            }
        }

        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: JSON.parse(localStorage.getItem('userDetails'))
            }
        }

        case USER_LOGIN_ERROR: {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                isLoading: false
            }
        }

        default: {
            return state;
        }
    }
}

export {reducer};