import { takeLatest, put, all, call, select} from 'redux-saga/effects';
import { cartTypes, setProductListAction } from './cart.reducer';
import { addProductToCart, removeProductToCart } from '../../utils/Product/cart/cart.utils';


export const getCart = (state) => state.cart;

export function* addProductToCartSideEffect({payload}){

    let state = yield select(getCart);
    const { productlist } = state;

    const product = payload;

    const productFormated = 
        { 
            id: product.id, 
            price: product.price,
            quantity: product.quantity,
            shipping_cost_unit: 0,// product.shipping_cost_unit,
            sold_individualy: product.sold_individualy

        } // convert product
    const newlistProduct = addProductToCart(product, productlist)

    yield put(
       setProductListAction(newlistProduct)
    )


}

export function* removeProductToCartSideEffect({payload}){
    let state = yield select(getCart);
    const { productlist } = state;
    const product = payload;


    const newlistProduct = removeProductToCart(product, productlist)

    yield put(
       setProductListAction(newlistProduct)
    )

}

export function* onRemoveProductToCart(){
    yield takeLatest(cartTypes.REMOVE_PRODUCT_TO_CART,removeProductToCartSideEffect)
}

export function* onAddProductToCart(){
    yield takeLatest(cartTypes.ADD_PRODUCT_TO_CART,addProductToCartSideEffect)
}

export default function* cartSagas(){
    yield all([
        call(onRemoveProductToCart),
        call(onAddProductToCart)
    ])
}