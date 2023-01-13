import React from 'react';
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const mapState = (state) => ({
  productList: state.productlist.product_list,
  isLoading: state.productlist.is_loading
  
})

/*===================================================================
=            FONCTIONAL CONTAINER COMPONENT PRODUCT LIST       =
====================================================================*/
export function withContainer(WrapperViewComponent , LoadingViewComponent, ProductCardViewComponent) {
  return function Container() {
    const {productList, isLoading} = useSelector(mapState);
    return (  
      <WrapperViewComponent >
        { isLoading ? < LoadingViewComponent/>  : productList.map((product) => <ProductCardViewComponent  key={uuidv4()} content={product}/> )}
        </ WrapperViewComponent >
    );
  }
}