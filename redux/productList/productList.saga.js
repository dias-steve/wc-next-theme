import { takeLatest, put, all, call } from 'redux-saga/effects';
import { filterConverterToQuery, getListQueryConverter } from '../../components/productcomponents/ProductCategorieFilter/ProductCategorieFilter.utils';
import { setIsLoading, setProductList } from './productList.action';
import { handleFetchProductList } from './productList.helpers';
import productListTypes from './productList.types';

export  function* fetchProductList({payload}) {
    try{
    yield put(
        setIsLoading(true)
    )

    const query = filterConverterToQuery(payload)

    const {data: {result}} = yield handleFetchProductList(query)
  
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