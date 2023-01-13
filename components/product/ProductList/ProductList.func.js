import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { fetchProductListStart } from '../../../redux/productList/productList.action';






const mapState = (state) => ({
  productList: state.productlist.product_list,
  filter : state.productlist.filter,
  isLoading: state.productlist.is_loading
  
})


/*===================================================================
=            FONCTIONAL CONTAINER COMPONENT PRODUCT LIST       =
====================================================================*/



export function withContainer(WrapperViewComponent , LoadingViewComponent, ProductCardViewComponent) {
  return function Container() {
    const {productList, isLoading, filter} = useSelector(mapState);
    const dispatch = useDispatch();
  
    useEffect(
      () => {
        //abort the fetching if we left the component
        const controller = new AbortController();
        dispatch(
          fetchProductListStart(filter)
        )
        return () => {
          controller.abort()
        }
      },
    [filter])
    return (  
      <WrapperViewComponent >
        { isLoading ? < LoadingViewComponent/>  : productList.map((product) => <ProductCardViewComponent  key={uuidv4()} content={product}/> )}
        </ WrapperViewComponent >
    );
  }
}