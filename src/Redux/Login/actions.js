import {USER_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR} from './actionTypes';

const userLogin = () => {
    const payload = JSON.parse(localStorage.getItem('userDetails'));
    return {
        type: USER_LOGIN_SUCCESS,
        payload: {
            user: payload
        }
    }
}


export {userLogin};