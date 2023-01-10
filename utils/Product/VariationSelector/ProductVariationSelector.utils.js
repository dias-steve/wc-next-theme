import RenderResult from "next/dist/server/render-result";

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

    if(good.length === 1){
      return { ...good[0], cleanResult: good.length === 1 ? true : false };
    }else{
      return good;
    }

  }

  export function filterVariation(child, variationName, variationValue) {
    if (child.variation_name[variationName] === variationValue) {
      return true;
    }
    return false;
  }

  export function  getListVariationValueAvailble( variationsSelected, variationKey, childrensProductList){

    const variableSelectedfilter = variationsSelected;
    delete variableSelectedfilter[variationKey];

    const listchildProduct = getChildBySelector( variableSelectedfilter , childrensProductList)
      .reduce((listValue, child )=> {
        const {variation_name, product_is_in_stock} = child;

        return listValue = [...listValue, {  availble:product_is_in_stock, value: variation_name[variationKey] }]}
        , [])

        console.log(listchildProduct)
    return  { variationKey:variationKey,valueList:listchildProduct};

  }



export function  AddVariationSelectedToList  ( variation ,variationsSelectedList ) {


}

export function getFirstChildAvaible(children){
  return children.filter (child => {
    return child.product_is_in_stock

  })[0];
}