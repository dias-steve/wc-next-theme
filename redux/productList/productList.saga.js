import { takeLatest, put, all, call } from 'redux-saga/effects';
import { filterConverterToQuery, getListQueryConverter} from '../../utils/Product/product_filter/productFilter.utils';
import { setIsLoading, setProductList } from './productList.action';
import { handleFetchProductList } from './productList.helpers';
import productListTypes from './productList.types';

export  function* fetchProductList({payload}) {
    console.log('hey');
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

export default function* ProductSaga(){
    yield all([
        call(onFetchProductListStart)
    ])
}