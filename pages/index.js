import {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { useDispatch, useSelector } from "react-redux";
import ProductCategorieFilter from '../components/productcomponents/ProductCategorieFilter/ProductCategorieFilter'
import ProductList from '../components/productcomponents/ProductList/ProductList'
import styles from '../styles/Home.module.scss'
import { fetchProductListStart, setProductList } from '../redux/productList/productList.action';
import ProductFilterPrice from '../components/productcomponents/ProductFilterPrice/ProductFilterPrice';
import ProductSortbyPrice from '../components/productcomponents/ProductSortbyPrice/ProductSortByPrice.js';

export default function Home({data}) {

  const dispatch = useDispatch();








  


  return (
    <div className={styles.container}> 
      <ProductCategorieFilter  categorieData={data} /> 

      <ProductSortbyPrice />
      <ProductList />
  
    </div>
    
  )
}

export async function getStaticProps() {
 

  const dataRaw = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/products/categories", {
    // Adding method type
    method: "GET",

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });




  const data = await dataRaw.json();





  return {
    props: {
      data

    },
    revalidate: 60, // rechargement toutes les 10s
  };
}
