import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import productListReducer from './productList/productList.reducer';
import singleProductReducer from './singleproduct/singleproduct.reducer';
import cartReducer from './cart/cart.reducer';

export const rootReducer = combineReducers({

    productlist: productListReducer,
    singleproduct: singleProductReducer,
    cart: cartReducer

});

const configStorage = {
    key: 'root',
    storage,
    blacklist: ['productlist', 'singleproduct','cart'],// TODO: Remove cart to this list

}

export default persistReducer(configStorage, rootReducer);