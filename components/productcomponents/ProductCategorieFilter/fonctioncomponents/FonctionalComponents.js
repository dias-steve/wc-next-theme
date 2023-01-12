import React from 'react';
import { addCategorieInFilter, isCategorySelected, removeCategorieInFilter } from '../../../../utils/Product/Filter/ProductFilter.utils';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { BtnOptionCategory } from '../ProductCategorieFilter';


const mapState = (state) => ({
    filter: state.productlist.filter,
  })

  
/*===================================================================
=            FONCTIONAL CONTAINER COMPONENT FILTER CATEGORY        =
====================================================================*/

/**
 * Global container
 * @param {*} param0 
 * @returns 
 */

export function ProductCategorieFilterContainer({WrapperViewComponant,BtnViewComponent,categorieData}){
  const {categorie_flat} = categorieData;
  return (
    <WrapperViewComponant>{categorie_flat.map((category) => {
      return <FilterBtnContainer BtnViewComponent ={BtnViewComponent} key={uuidv4()} category={category}/>;
    })}</WrapperViewComponant>
  )
}

/**
 * Filter container
 * @param {*} param0 
 * @returns 
 */
export const FilterBtnContainer = ({BtnViewComponent,category}) => {
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
  
  
    return <BtnViewComponent 
              handleClick={handleClick}
              label={name}
              checked= {checked}
            />
  }
  
  
  
  
  