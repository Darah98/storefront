import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categories from './categories.js';
import products from './products.js';
import cart from './cart.js';
// import api from './api.js';



const rootReducer = combineReducers({categories, products, cart});

const store = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();