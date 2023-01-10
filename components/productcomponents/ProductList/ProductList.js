import React, { useEffect } from 'react';
import styles from './ProductList.module.scss';
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../ProductCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import { fetchProductListStart } from '../../../redux/productList/productList.action';


const mapState = (state) => ({
  productList: state.productlist.product_list,
  filter : state.productlist.filter,
  isLoading: state.productlist.is_loading
  
})
export default function ProductList() {
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
    <div className={styles.global_container}>
    <div className={styles.grid} >
      { isLoading ? '...loading' : productList.map((product) => <ProductCard key={uuidv4()} content={product}/> )}
      
      </div>
    </div>

  )
}
