import React from 'react';
import styles from './ProductList.module.scss';
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../ProductCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';


const mapState = (state) => ({
  productList: state.productlist.product_list,
  isLoading: state.productlist.is_loading
  
})
export default function ProductList() {
  const {productList, isLoading} = useSelector(mapState);

  return (
    <div>{ isLoading ? '...loading' : productList.map((product) => <ProductCard key={uuidv4()} content={product}/> )}
      
      </div>
  )
}
