

export function getChildBySelector(
    variationsSelected,
    childrensProduct
  ) {
    let good = childrensProduct;
    const variations = Object.keys(variationsSelected);
    for (let i = 0; i < variations.length; i++) {
      good = good.filter((child) =>
        filterVariation(child, variations[i], variationsSelected[variations[i]])
      );
    }

    if(Array.isArray(good) && good.length >= 1){
      return good
    }else{
      return [];
    }

  }

  export function filterVariation(child, variationName, variationValue) {
    if (child.variation_name[variationName] === variationValue) {
      return true;
    }
    return false;
  }

  export function  getListVariationValueAvailble( variationsSelected, variationKey, childrensProductList){

   
    const variableSelectedfilter = Object.entries(variationsSelected).reduce((acc, current)=> {
      const [key, value] = current
      if(key !== variationKey){
        acc = {...acc, [key]: value}
      }
      return acc;
    }, {})

 
   
    const listchildProduct = getChildBySelector( variableSelectedfilter , childrensProductList)
      .reduce((listValue, child )=> {
        const {variation_name, product_is_in_stock} = child;``
        const valueName = variation_name[variationKey] 
   
        return listValue = {...listValue, [valueName]: product_is_in_stock}}
        , {})

       
    return  {[variationKey]:listchildProduct};

  }




export function getFirstChildAvaible(children){
  return children.filter (child => {
    return child.product_is_in_stock

  })[0];
}

export function getVariationAvailableValue(variationSelected,children){
return Object
  .keys(variationSelected)
  .reduce( (acc, current) => {
      
      const listValueAvaible = getListVariationValueAvailble(variationSelected, current, children)
   
      return {...acc,...listValueAvaible}
},{})
}