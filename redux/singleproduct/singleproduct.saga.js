import { takeLatest, put, all, call, select } from "redux-saga/effects";

import {
  setListVariations,
  setProductParent,
  setSelectedProduct,
  setVariationListDetailed,
  setVariationSelected,
  setVariationStockStatus,
  singleProductTypes,
} from "./singleproduct.reducer";
import {
  getChildBySelector,
  getFirstChildAvaible,
  getVariationAvailableValue,
} from "../../utils/product/productOptionVairationSelector/productVariationSelector.utils";

export const getSingleProduct = (state) => state.singleproduct;

/*=============================================
=            SINGLE PRODUCT SIDE EFFECT           =
=============================================*/
/**
 *
 * @param {*} param0
 */

export function* setSingleProductDataToStore({ payload }) {
  const { list_variations, variation_list_detail, product_is_variable } = payload;
  yield put(setProductParent(payload));
  yield put(setVariationListDetailed(variation_list_detail));
  yield put(setListVariations(list_variations));
 
  let state = yield select(getSingleProduct);

  const {product_parent} = state;
  const {
    product_parent: { children },
  } = state;

 
  const childSelected = product_is_variable ? 
    getFirstChildAvaible(children) :
    product_parent
  ;

 

  const variationsSelectedArray =  product_is_variable ? getVariationAvailableValue(
    childSelected.variation_name,
    children
  ):null;


  yield put(setVariationStockStatus(variationsSelectedArray));

  yield put(setVariationSelected(childSelected.variation_name));

  yield put(setSelectedProduct(childSelected));

}

/**
 *
 * @param {*} param0
 */

export function* setVariationSelectedStart({ payload }) {
  let state = yield select(getSingleProduct);

  const {product_parent,   variations_selected} =state;
  const {
    children 
  } = product_parent;

  const newVariationSelected = { ...variations_selected, ...payload };

  const childSelected = getChildBySelector(newVariationSelected, children);

  const oneChildSelected =  Array.isArray(childSelected) && childSelected.length >=1 ? childSelected[0] : {...product_parent,   product_is_in_stock: false};


    const variationsSelectedArray = getVariationAvailableValue(
      newVariationSelected,
      children
    )
 
    yield put(setVariationStockStatus(variationsSelectedArray));
  
    yield put(setVariationSelected(newVariationSelected));
  
    yield put(setSelectedProduct(oneChildSelected));
 

}



/*=====  End of Section SIDE EFFECT ======*/

/*=============================================
=            CONNECT        =
=============================================*/

export function* onSetParentProductStart() {
  yield takeLatest(
    singleProductTypes.ON_SET_PRODUCT_PARENT_START,
    setSingleProductDataToStore
  );
}

export function* onSetVariation() {
  yield takeLatest(
    singleProductTypes.SET_LIST_VARIATION_SELECTED_START,
    setVariationSelectedStart
  );
}

/*=====  End of Section Connect ======*/

export default function* singleProductSaga() {
  yield all([call(onSetVariation), call(onSetParentProductStart)]);
}
