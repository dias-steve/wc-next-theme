import React from 'react';
import styles from './ProductFilter.module.scss';
import {withContainer } from './_productCategorieFilter.func';


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

export default withContainer(ViewFilterBtnContainerView,BtnOptionCategory)
