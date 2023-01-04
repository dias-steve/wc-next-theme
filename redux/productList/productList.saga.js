import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setIsLoading, setProductList } from './productList.action';
import { handleFetchProductList } from './productList.helpers';
import productListTypes from './productList.types';

export  function* fetchProductList({payload}) {
    try{
    yield put(
        setIsLoading(true)
    )

    const {data: {result}} = yield handleFetchProductList({...payload})
  
    yield put(
        setProductList(result)
    )

    yield put(
        setIsLoading(false)
    )
    } catch(err){
        console.log(err)
    }
}

export function* onFetchProductListStart(){
    yield takeLatest(productListTypes.FETCH_PRODUCT_LIST_START, fetchProductList)
}

export default function* postsSagas(){
    yield all([
        call(onFetchProductListStart)
    ])
}