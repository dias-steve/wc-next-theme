import React from 'react';
import styles from './ProductSortbyPrice.module.scss';

import { ProductSortByPriceContainer } from './fonctioncomoponents/FonctionalCompoents';


/*===================================================================
=            VIEW COMPONENT PRODUCT SORT PRICE     =
====================================================================*/

/**
 * Component that display button for options
 * @param {*} param0 
 * @returns 
 */

export function Btn ({label, checked, handleClick}) {
    return( <button 
        className={[styles.btn, checked? styles.btn_active : ''].join(" ")}
        onClick={e => {
            e.preventDefault();
            handleClick();
        }}
    >
        {label}
    </button>)
}


/**
 * Component that display button option list wrapper
 * @param {*} param0 
 * @returns 
 */
export function WrapperViewSortWrapper({children}) {
    return(<div>
        price
        {children}
    </div>)
}


/**
 * Component global 
 * @param {*} param0 
 * @returns 
 */
export default function ProductSortByPrice(){
    return <ProductSortByPriceContainer 
    WrapperView = {WrapperViewSortWrapper}
    BtnView = {Btn}
    />
}