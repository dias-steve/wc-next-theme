import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addCategorieInFilter, isCategorySelected, removeCategorieInFilter } from './ProductCategorieFilter.utils';
import { useDispatch, useSelector } from "react-redux";
import styles from './ProductFilter.module.scss';



export const FilterBtn = ({category}) => {
  const dispatch = useDispatch();
  const {filter} = useSelector(mapState);
  const {name, term_id} = category;
  const handleClick = async (e) => {

    console.log('click: '+name)
    if(!isCategorySelected(term_id,filter)){
      addCategorieInFilter(term_id,filter, dispatch);
    }else{
      removeCategorieInFilter(term_id,filter, dispatch);
    }

    
  }


  return <div  onClick={e => {handleClick(e)} } className={[styles.container_btn,isCategorySelected(term_id,filter) ? styles.isActive : ""].join(" ")}
  
  >
    <span dangerouslySetInnerHTML={{__html:name}}   />
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
      return <FilterBtn key={uuidv4()} category={category}/>;
    })}</div>
  )
}
