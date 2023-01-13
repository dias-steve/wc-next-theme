import React from 'react'
import styles from './addToCartBtn.module.scss';
import { withContainer } from './_addToCartBtn.func';



/*===================================================================
=            VIEW COMPONENT BTN ADD TO CART    =
====================================================================*/

/**
 * Component that display button add to card
 * @param {*} param0 
 * @returns 
 */


export  function AddToCartBtn ({label, available, handleClick}) {
  return (
    <div
      className={[ styles.add_to_cart, available ? "": styles.add_to_cart_not_avaible ].join(" ")}
      onClick={ e=> { handleClick(e)}}
    >
      {label}
    </div>
  )
}

export default  withContainer(AddToCartBtn);
