import {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { useDispatch, useSelector } from "react-redux";

import ProductList from '../components/product/ProductList/ProductList'
import styles from '../styles/Home.module.scss'



import ProductFilter from '../components/product/ProductFilter';
import { fetchProductListStart } from '../redux/productList/productList.reducer';

export default function Home({data}) {

  const dispatch = useDispatch();


  useEffect(
    () => {
      dispatch(
        fetchProductListStart("")
      )
    },
  [])





  


  return (
    <div className={styles.container}> 
   

      <ProductFilter.Categorie  categorieData={data} />
      <ProductFilter.SortByPrice />
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
