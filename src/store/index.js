  
import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import items from './items.js';

const rootReducer = combineReducers({items})

const store = () => {
    return createStore(rootReducer, composeWithDevTools());
}

export default store();