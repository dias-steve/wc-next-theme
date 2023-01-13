import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../../redux/productList/productList.action';
import productListReducer from '../../../../redux/productList/productList.reducer';
import { addListOfNumericalFilter, addNumericalFilterInFilter } from '../../../../utils/Product/productfilter/ProductFilter.utils';



const mapState =(state) => ({
    filter : state.productlist.filter
})
export default function ProductFilterPrice({min, max, step}) {
   const [maxTmp, setMaxTmp] = useState(200);
   const [minTmp, setMinTmp] = useState(10);
   const [send, setSend] = useState(false);
   const {filter} = useSelector(mapState);
   const dispatch = useDispatch();
   const [delayIsUp , setDelayIsUp] = useState(0)



 


   useEffect(() =>{
    
     
    
    const  numericalfilter = [{operator: '>=', key: '_price', value:minTmp},{operator: '<=', key: '_price', value:maxTmp} ]

      
    dispatch(
      setFilter({...filter, numericalfilter})
    )
  
 }, [delayIsUp])

 useEffect(() => {

 }, [minTmp, maxTmp])





   


  return (
    <div>
        <div>
        <label>prix max</label>
        <input type="number" onChange= {e => 
          {

            const value = e.target.value
            setMaxTmp(value)
            setTimeout(()=> {
              if(value!== ""){
                  setDelayIsUp(delayIsUp+1)
              }
              console
          }, 3000)
          
          }}value={maxTmp} />
        </div>
        <div>
        <label>prix min</label>
        <input type="number" onChange= {e => {
           const value = e.target.value
          setMinTmp(value)
          setTimeout(()=> {
           
            if(value!== ""){
                setDelayIsUp(delayIsUp+1)
            }
            console
        }, 3000)
        
        }}value={minTmp}/>
        </div>

    </div>
  )
}
