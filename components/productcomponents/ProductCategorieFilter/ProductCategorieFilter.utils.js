import { setFilter } from "../../../redux/productList/productList.action";



export const addCategorieInFilter = (idCategory,currentFilter,dispatch) => {
   const newFilter = addItemInTaxinomieFilter('product_cat', idCategory,currentFilter);
    dispatch(
        setFilter(newFilter)
    )
} 



export const removeCategorieInFilter = (idCategory,currentFilter,dispatch) => {
    const newFilter = removeItemInTaxinomieFilter('product_cat', idCategory,currentFilter);
    dispatch(
        setFilter(newFilter)
    )
}

export const isCategorySelected = (idCategory, currentFilter)=> {
    return isInTaxinomieFilter('product_cat', idCategory, currentFilter)
}

export const isInTaxinomieFilter = (taxinomyKey, id, currentFilter) => {

    const {taxinomy} = currentFilter;
    if(!taxinomy[taxinomyKey]){
        return false;
    }

    return taxinomy[taxinomyKey]?.value?.includes(id)
}

export const addItemInTaxinomieFilter = (taxinomyKey, id, currentFilter,) =>{
  
    let {taxinomy} = currentFilter;
    let newTaxinomyItem = {taxinomyKey:taxinomyKey, value:[id]}


    if( taxinomy[taxinomyKey] ){
        if(taxinomy[taxinomyKey].value.includes(id)){
            return {...currentFilter};
        }else{
            const curentValue = taxinomy[taxinomyKey].value;
            newTaxinomyItem = {taxinomyKey:taxinomyKey, value: [...curentValue, id]}
        }

    }
    taxinomy[taxinomyKey] = newTaxinomyItem 
    return {...currentFilter, taxinomy}
}

export const removeItemInTaxinomieFilter = (taxinomyKey, id, currentFilter,) =>{
  
    let {taxinomy} = currentFilter;



    if( taxinomy[taxinomyKey] ){
        if(taxinomy[taxinomyKey].value.includes(id)){
            const newTaxinomyvalue = taxinomy[taxinomyKey].value.filter(function(value, index, arr){ 
                return value !== id;
              
            });
            
            if(newTaxinomyvalue >0){
                taxinomy[taxinomyKey] ={taxinomyKey: taxinomyKey , value: newTaxinomyvalue}
                return {...currentFilter, taxinomy};
            }else{
                delete taxinomy[taxinomyKey]
                return {...currentFilter, taxinomy};
            }

        }

    }
 
    return {...currentFilter};
}