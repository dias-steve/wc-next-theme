import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { addItemInTaxinomieFilter, convertSortValueStringQuery, filterConverterToQuery, removeItemInTaxinomieFilter} from '../../utils/Product/productFilter/productFilter.utils';
import { setIsLoading, setProductList, productListTypes, setFilter, fetchProductListStart, setFilterStartAction  } from './productList.reducer';
import { handleFetchProductList  } from './productList.helpers';

export const getProductList = (state) => state.productlist

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
        //TODO: ERROR MESSAGE
    }
}

export function* addCategoryToFilter({payload}) {
    let state = yield select(getProductList);
    const {filter} = state;

    const idCategoryToAdd = payload

    const newFilterGenerated = addItemInTaxinomieFilter(
        "product_cat",
        idCategoryToAdd,
        filter
      );
    


    yield put(
        setFilterStartAction(newFilterGenerated)
    );
}

export function* removeCategoryToFilter({payload}) {
    let state = yield select(getProductList);
    const {filter} = state;

    const idCategoryToRemove = payload

    const newFilterGenerated = removeItemInTaxinomieFilter(
        "product_cat",
        idCategoryToRemove,
        filter
      );
    


    yield put(
        setFilterStartAction(newFilterGenerated)
    );
}

export function* setFilterStart({payload}){

    const filter = payload;
    yield put(
        setFilter(filter)
    );
    yield put(
        fetchProductListStart(filter)
    );

}

export function*setSortToFilter({payload}){
    let state = yield select(getProductList);
    const {filter} = state;

    const {key : keyBtn, isASC} = payload;
    let sortValueConverted = ''
    
   
    if(keyBtn === "price"){
       sortValueConverted = convertSortValueStringQuery("_price",isASC)
    }

    const newFilterGenerated = {...filter, sort: sortValueConverted }

    yield put(
        setFilterStartAction(newFilterGenerated)
    );
}

export function* onFetchProductListStart(){
        yield takeLatest(productListTypes.FETCH_PRODUCT_LIST_START, fetchProductList)
    
}

export function* onAddCategoryToFilter(){
    yield takeLatest(productListTypes.ADD_CATEGORY_FILTER, addCategoryToFilter)

}

export function* onRemoveCategoryToFilter(){
    yield takeLatest(productListTypes.REMOVE_CATEGORY_FILTER, removeCategoryToFilter)
}

export function* onSetSortFilter(){
    yield takeLatest(productListTypes.SET_SORT_FILTER, setSortToFilter)
}

export function* onSetFilterStart(){
    yield takeLatest(productListTypes.SET_FILTER_START, setFilterStart)
}



export default function* ProductSaga(){
    yield all([
        call(onFetchProductListStart),
        call(onAddCategoryToFilter),
        call(onRemoveCategoryToFilter),
        call(onSetSortFilter),
        call(onSetFilterStart)
    ])
}