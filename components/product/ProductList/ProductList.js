import React from 'react';
import styles from './ProductList.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { withContainer } from './_productList.func';



/*===================================================================
=            VIEW COMPONENT PRODUCT LIST       =
====================================================================*/

/**
 * Component that displays list of product
 * @param {*} param0 
 * @returns 
 */
export function ListProductWrapperView ({children: Productlist}) {
  return (<div className={styles.global_container}>
    <div className={styles.grid} >
    {Productlist}
    </div>
  </div>)
}
/**
 * Componant show when product is loading
 * @returns 
 */
export function LoadingProductListView () {
  return <span>is loading....</span>
}

export default withContainer(ListProductWrapperView, LoadingProductListView, ProductCard)

