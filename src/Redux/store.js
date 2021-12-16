import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {reducer as cartReducer} from './Cart/reducer';
import {reducer as loginReducer} from './Login/reducer';


const rootReducer = combineReducers({
    cart: cartReducer,
    login: loginReducer
})

const thunkMiddleware = (store) => (next) => (action) => {
    if(typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }

    return next(action);
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, enhancer);

export default store;