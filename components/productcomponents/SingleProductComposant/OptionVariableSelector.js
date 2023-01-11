import React , {useEffect, useState}from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import styles from './OptionVariableSelector.module.scss';
import { setVariationSelected, setVariationSelectedStart } from '../../../redux/singleproduct/singleproduct.reducer';


const mapState = (state) =>({
    singleProduct: state.singleproduct
})

const BtnValue = ({name, variation_key}) => {

  const {singleProduct } = useSelector(mapState);
  const {variations_selected,variations_stock_status} = singleProduct;


  
  const isSelected = variations_selected?.[variation_key] === name
  const isAvailable = variations_stock_status?.[variation_key]?.[name]

  const dispatch = useDispatch()

  const handleclick = () => {
    if(isAvailable){
      dispatch(setVariationSelectedStart({[variation_key]: name}))
    }
  }

  return (
  <button className={[styles.option_btn, isSelected ? styles.selected: '' , isAvailable ? '' : styles.option_not_available].join(" ")}
    onClick={(e) =>{
      e.preventDefault();
      handleclick();
    }}
  >{name}</button>)
}
const SingleVariation = ({variation}) => {
  const {variation_name, variation_key,termes:{termes_names} } = variation
  return (
  <div>
    <span>{variation_name}- {variation_key}</span>
  
  <div>
    {termes_names.map((name) => (<BtnValue key={ uuidv4()} name={name} variation_key={variation_key}  />))}
  </div>
  </div>
  )

}
export default function OptionVariableSelector() {
  const {singleProduct } = useSelector(mapState);
  const { list_variations} = singleProduct;


  return (
    <div>
      {list_variations.map(variation => <SingleVariation key={uuidv4()}variation={variation}/>)}
    </div>
  )
}
