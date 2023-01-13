import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartAction } from "../../../../redux/cart/cart.reducer";

/*===================================================================
=            FONCTIONAL CONTAINER COMPONENT BTN ADD TO CART    =
====================================================================*/

/**
 *
 * @param {*} param0
 * @returns
 */

const mapState = (state) => ({
  singleProduct: state.singleproduct,
});

export const withContainer = (BtnView) => {
  return function Container() {
    const { singleProduct } = useSelector(mapState);
    const dispatch = useDispatch();
    const { product_selected} = singleProduct

    
    const available =   product_selected.product_is_in_stock ? true : false;

    const handleClick = (e) => {

      e.preventDefault();
    
      if (available){
        dispatch(
            addProductToCartAction({...product_selected, quantity: 1})
        )
      }
      //TODO: Event add to Card
    };
    return (
      <BtnView
        handleClick={handleClick}
        label={"add to Cart"}
        available={available}
      />
    );
  };
};
