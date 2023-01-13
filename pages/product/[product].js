import React, { useEffect } from 'react';
import styles from './Product.module.scss';
import {useSelector, useDispatch} from 'react-redux';
import { setParentProductStart } from '../../redux/singleproduct/singleproduct.reducer';
import SingleProduct from '../../components/product/SingleProduct';


const mapState = (state) => ({
  singleProduct: state.singleproduct
});


export default function Product(props) {
    const {singleProduct} = useSelector(mapState);
    const {data:parentproduct} = props.product
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(setParentProductStart(parentproduct));
    },[ ])
    console.log(  props.product)


   const {title, price, product_is_variable} = singleProduct.product_parent
   const {product_is_valid} = singleProduct;
   const {name, product_is_in_stock, id} = singleProduct.product_selected

  

  

  
  return (
    <div>
    
      {title}-{name}-{product_is_in_stock ? "dispo": "non dispo"}-{id}
  

     { product_is_variable && product_is_valid &&
      <SingleProduct.OptionVariableSelector />}
    
    {!product_is_valid &&
      <p> product not valid </p>
    }
    <SingleProduct.AddToCardBtn/>
    </div>
  )
}

export async function getStaticProps(context){
    const id = context.params.product;

    const dataRaw = await fetch(
        process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/products/" + id,
        {
            // Adding method type
            method: "GET",
      
            // Adding headers to the request
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
    )

    const data = await dataRaw.json();

    return {
        props: {
            product: data
        },
        revalidate: 60,
    };

}

export async function getStaticPaths() {
    const data = await fetch(
      process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/products",
      {
        // Adding method type
        method: "GET",
  
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  
    const products = await data.json()
    
  
    // on dit le chemin pour chaque articles
    const paths = products.data.result.map((item) => ({
      params: { product: item.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }
