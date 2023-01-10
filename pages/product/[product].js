import React, { useEffect } from 'react';
import styles from './Product.module.scss';
import {useSelector, useDispatch} from 'react-redux';
import { setParentProduct, setParentProductStart } from '../../redux/singleproduct/singleproduct.reducer';
import OptionVariableSelector from '../../components/productcomponents/SingleProductComposant/OptionVariableSelector';


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



   const {title, price} = singleProduct.product_parent
   const {name, product_is_in_stock} = singleProduct.product_selected
   

  
  return (
    <div>
    
      {title}-{name}-{product_is_in_stock ? "dispo": "non dispo"}
      <OptionVariableSelector />
    
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
