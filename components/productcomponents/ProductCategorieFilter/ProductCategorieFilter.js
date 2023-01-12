import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addCategorieInFilter, isCategorySelected, removeCategorieInFilter } from '../../../utils/Product/Filter/ProductFilter.utils';
import { useDispatch, useSelector } from "react-redux";
import styles from './ProductFilter.module.scss';


/*=============================================
=           PRESENTATIONAL COMPONENT         =
=============================================*/
function BtnOptionCategory({checked, label, handleClick}){
  return (
    <div  onClick={e => {handleClick(e)} } className={[styles.container_btn, checked ? styles.isActive : ""].join(" ")}>
      <span dangerouslySetInnerHTML={{__html:label}}   />
    </div>
  )
}

/*=============================================
=            CONTAINER COMPONENT          =
=============================================*/

export const FilterBtnContainer = ({category}) => {
  const dispatch = useDispatch();
  const {filter} = useSelector(mapState);
  const {name, term_id} = category;
 const checked = isCategorySelected(term_id,filter)
  const handleClick = async (e) => {

  
    if(!isCategorySelected(term_id,filter)){
      addCategorieInFilter(term_id,filter, dispatch);
    }else{
      removeCategorieInFilter(term_id,filter, dispatch);
    }
  }


  return <BtnOptionCategory 
            handleClick={handleClick}
            label={name}
            checked= {checked}
          />
}



const mapState = (state) => ({
  filter: state.productlist.filter,
})

export default function ProductCategorieFilter({categorieData}) {
  const {categorie_flat} = categorieData;



  return (
    <>{categorie_flat.map((category) => {
      return <FilterBtnContainer key={uuidv4()} category={category}/>;
    })}</>
  )
}
