import {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { useDispatch, useSelector } from "react-redux";
import ProductFilter from '../components/productcomponents/ProductFilter/ProductFilter'
import ProductList from '../components/productcomponents/ProductList/ProductList'
import styles from '../styles/Home.module.scss'
import { setProductList } from '../redux/productList/productList.action';

export default function Home({data}) {
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setProductList(data.data.result)
    )
  })



  return (
    <div className={styles.container}> <ProductList/> <ProductFilter /></div>
    
  )
}

export async function getStaticProps() {
 

  const dataRaw = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/products", {
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
