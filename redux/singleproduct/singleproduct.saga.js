import { takeLatest, put, all, call, select} from 'redux-saga/effects';

import { setListVariations, setProductParent, setSelectedProduct, setVariationSelected, singleProductTypes } from './singleproduct.reducer';
import { getChildBySelector, getFirstChildAvaible } from '../../utils/Product/VariationSelector/ProductVariationSelector.utils';

export const getPorductParent = (state) => state.singleproduct
export function* setSingleProductDataToStore({payload}){

    try{

        const {list_variations} = payload
        yield put(
            setProductParent(payload)
        )
        yield put(
            setListVariations(list_variations)
        )

        let state = yield select(getPorductParent); 

        const {product_parent:{children}} = state

        const childSelected = getFirstChildAvaible(children)
      
     
 
        yield put(
            setVariationSelected(childSelected.variation_name)
        )

        yield put(
            setSelectedProduct(childSelected)
        )

        //selected variables

        getFirstChildAvaible(childSelected)
    }catch(err){
        console.log(err)
    }
}



export function*setVariationSelectedStart({payload}){

  
        let state = yield select(getPorductParent); 

        const {product_parent:{children}} = state

        const childSelected = getChildBySelector(payload,children)
  

        yield put(
            setVariationSelected(payload)
        )

        yield put(
            setSelectedProduct(childSelected)
        )
        
   



}

export function* onSetParentProductStart(){
    yield takeLatest(singleProductTypes.ON_SET_PRODUCT_PARENT_START, setSingleProductDataToStore)
}

export function* onSetVariation(){
    yield takeLatest(singleProductTypes.SET_LIST_VARIATION_SELECTED_START, setVariationSelectedStart)
}

export default function* singleProductSagas(){
    yield all([
        call(onSetVariation),
        call(onSetParentProductStart)
    ])
}