import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import productListReducer from './productList/productList.reducer';

export const rootReducer = combineReducers({

    productlist: productListReducer

});

const configStorage = {
    key: 'root',
    storage,
    blacklist: ['productlist'],

}

export default persistReducer(configStorage, rootReducer);