import React from 'react';
import styles from './ProductFilter.module.scss';
import {  ProductCategorieFilterContainer } from './fonctioncomponents/FonctionalComponents';


/*=============================================
=           PRESENTATIONAL COMPONENT         =
=============================================*/

/**
 * 
 * BtnCategoryPresentation
 * @param {*} param0 
 * @returns 
 */
export function BtnOptionCategory({checked, label, handleClick}){
  return (
    <div  onClick={e => {handleClick(e)} } className={[styles.container_btn, checked ? styles.isActive : ""].join(" ")}>
      <span dangerouslySetInnerHTML={{__html:label}}   />
    </div>
  )
}


/**
 * 
 * ViewFilterBtnContainerView
 * @param {*} param0 
 * @returns 
 */
export function ViewFilterBtnContainerView ({children: CategorieList})  {
  return(
    <div>
      list cat
      {CategorieList}
    </div>
  )
}




export default function ProductCategorieFilter({categorieData}) {
  return <ProductCategorieFilterContainer
    WrapperViewComponant={ViewFilterBtnContainerView}
    BtnViewComponent={BtnOptionCategory}
    categorieData={categorieData}
    />
}
