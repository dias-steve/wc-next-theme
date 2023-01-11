import { takeLatest, put, all, call, select} from 'redux-saga/effects';
import { cartTypes } from './cart.reducer';

export const getCart = (state) => state.cart;

export function* addProductToCart({payload}){

}

export function* onAddProductToCart(){
    yield takeLatest(cartTypes.ADD_PRODUCT_TO_CART,addProductToCart )
}

export default function* cartSagas(){
    yield all([
        call(onAddProductToCart)
    ])
}