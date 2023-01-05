import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addCategorieInFilter, removeCategorieInFilter } from './ProductCategorieFilter.utils';
import { useDispatch, useSelector } from "react-redux";
import styles from './ProductFilter.module.scss';



export const FilterBtn = ({category}) => {
  const handleClick = (e) => {
    e.preventDefault();
  }
  const {name, term_id} = category;

  return <div className={styles.container}>
    <span dangerouslySetInnerHTML={{__html:name}} />
  </div>
}



const mapState = (state) => ({
  filter: state.productlist.filter,
})
export default function ProductCategorieFilter({categorieData}) {
  const {categorie_flat} = categorieData;
  const {filter} = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect(() => {



   
  },[])

  return (
    <div>{categorie_flat.map((category) => {
      return <FilterBtn key={uuidv4()} category={category} />;
    })}</div>
  )
}
