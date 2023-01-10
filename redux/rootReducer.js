import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import productListReducer from './productList/productList.reducer';
import singleProductReducer from './singleproduct/singleproduct.reducer';

export const rootReducer = combineReducers({

    productlist: productListReducer,
    singleproduct: singleProductReducer,

});

const configStorage = {
    key: 'root',
    storage,
    blacklist: ['productlist', 'singleproduct'],

}

export default persistReducer(configStorage, rootReducer);