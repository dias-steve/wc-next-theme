import { takeLatest, put, all, call, select} from 'redux-saga/effects';

import { setListVariations, setProductParent, setSelectedProduct, setVariationListDetailed, setVariationSelected, setVariationStockStatus, singleProductTypes } from './singleproduct.reducer';
import { getChildBySelector, getFirstChildAvaible, getListVariationValueAvailble, getVariationAvailableValue } from '../../utils/Product/productOptionVairationSelector/productVariationSelector.utils';

export const getSingleProduct = (state) => state.singleproduct


export function* setSingleProductDataToStore({payload}){

        const {list_variations,variation_list_detail} = payload
        yield put(
            setProductParent(payload)
        )
        yield put(setVariationListDetailed( variation_list_detail))
        yield put(
            setListVariations(list_variations)
        )

        let state = yield select(getSingleProduct); 

        const {product_parent:{children}} = state

      
        //get the product Selected
        const childSelected = getFirstChildAvaible(children)
      
     
        // we get the list of varable value available with
        const variationsSelectedArray = getVariationAvailableValue(childSelected.variation_name,children);



        yield put(setVariationStockStatus( variationsSelectedArray))
      
        

     
 
        yield put(
            setVariationSelected(childSelected.variation_name)
        )

        yield put(
            setSelectedProduct(childSelected)
        )

        //selected variables

}


export function*setVariationSelectedStart({payload}){

  
        let state = yield select(getSingleProduct); 

        const {product_parent:{children}, variations_selected} = state

        const newVariationSelected = {...variations_selected, ...payload}
        //get the product selected
        const childSelected = getChildBySelector(newVariationSelected,children)
        
         // we get the list of varable value available with
        const variationsSelectedArray = getVariationAvailableValue(childSelected.variation_name,children);



        yield put(setVariationStockStatus( variationsSelectedArray))

        yield put(
            setVariationSelected(newVariationSelected)
        )

        yield put(
            setSelectedProduct(childSelected)
        )

}



/*=============================================
=            connextiont            =
=============================================*/




export function* onSetParentProductStart(){
    yield takeLatest(singleProductTypes.ON_SET_PRODUCT_PARENT_START, setSingleProductDataToStore)
}

export function* onSetVariation(){
    yield takeLatest(singleProductTypes.SET_LIST_VARIATION_SELECTED_START, setVariationSelectedStart)
}



/*=============================================
=            CALL            =
=============================================*/




export default function* singleProductSaga(){
    yield all([
        call(onSetVariation),
        call(onSetParentProductStart)
    ])
}