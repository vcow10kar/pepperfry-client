import {USER_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR} from './actionTypes';

const initState = {
    isAuthenticated: null,
    isLoading: false,
    user: null
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
                user: payload.user
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