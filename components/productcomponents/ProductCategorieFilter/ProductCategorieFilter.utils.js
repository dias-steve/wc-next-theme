import { setFilter } from "../../../redux/productList/productList.action";

export const addCategorieInFilter = (idCategory, currentFilter, dispatch) => {
  const newFilter = addItemInTaxinomieFilter(
    "product_cat",
    idCategory,
    currentFilter
  );
  dispatch(setFilter(newFilter));
};



export const removeCategorieInFilter = (
  idCategory,
  currentFilter,
  dispatch
) => {
  const newFilter = removeItemInTaxinomieFilter(
    "product_cat",
    idCategory,
    currentFilter
  );
  dispatch(setFilter(newFilter));
};

export const addNumericalFilterInFilter = (key, operator, currentFilter, dispatch) =>{
  dispatch(
    setFilter(getAddNumericalFilterInFilter(key,operator,currentFilter))
  )
}

export const removeNumericalFilterInFilter = (key, operator, currentFilter, dispatch) =>{
  dispatch(
    setFilter(getRemoveNumericalFilterInFilter(key,operator,currentFilter))
  )
}

export const isCategorySelected = (idCategory, currentFilter) => {
  return isInTaxinomieFilter("product_cat", idCategory, currentFilter);
};

export const isInTaxinomieFilter = (taxinomyKey, id, currentFilter) => {
  const { taxinomy } = currentFilter;
  if (taxinomy=== null || !taxinomy[taxinomyKey]) {
    return false;
  }

  return taxinomy[taxinomyKey]?.value?.includes(id);
};

export const addItemInTaxinomieFilter = (taxinomyKey, id, currentFilter) => {
  const { taxinomy } = currentFilter;

  if (taxinomy && taxinomyKey in taxinomy) {
    if (taxinomy[taxinomyKey].value.includes(id)) {
      return { ...currentFilter };
    } else {
      const curentValue = taxinomy[taxinomyKey].value;
      taxinomy[taxinomyKey] = {
        taxinomyKey: taxinomyKey,
        value: [...curentValue, id],
      };
      return { ...currentFilter, taxinomy };
    }
  } else {
    return {
      ...currentFilter,
      taxinomy: { [taxinomyKey]: { taxinomyKey: taxinomyKey, value: [id] } },
    };
  }
};

export const removeItemInTaxinomieFilter = (taxinomyKey, id, currentFilter) => {
  const { taxinomy } = currentFilter;

  if (taxinomy && taxinomyKey in taxinomy) {
    if (taxinomy[taxinomyKey]) {
      const newTaxinomyvalue = taxinomy[taxinomyKey].value.filter((
        value

      ) => {
        return value !== id;
      });

      if (newTaxinomyvalue.length > 0) {
        taxinomy[taxinomyKey] = {
          taxinomyKey: taxinomyKey,
          value: newTaxinomyvalue,
        };
        return { ...currentFilter, taxinomy };
      } else {
        delete taxinomy[taxinomyKey];

        if (Object.keys(taxinomy).length <=0) {
          return { ...currentFilter, taxinomy: null };
        }
        return { ...currentFilter, taxinomy };
      }
    }
  }

  return { ...currentFilter };
};

export const filterConverterToQuery = (filter) => {
  let queryStringResult = "?";
  if (filter.taxinomy) {
    queryStringResult =
      queryStringResult +
      (queryStringResult === "?" ? "" : "&") +
      "taxinomy=" +
      getListQueryConverter(filter.taxinomy);
  }

  if (filter.sort) {
    queryStringResult =
      queryStringResult +
      (queryStringResult === "?" ? "" : "&") +
      "sort=" +
      filter.sort;
  }

  if (filter.limit) {
    queryStringResult =
      queryStringResult +
      (queryStringResult === "?" ? "" : "&") +
      "limit=" +
      filter.limit;
  }

  if (filter.page) {
    queryStringResult =
      queryStringResult +
      (queryStringResult === "?" ? "" : "&") +
      "page=" +
      filter.page;
  }

  if (filter.numericalfilter && filter.numericalfilter.length > 0) {
    queryStringResult =
      queryStringResult +
      (queryStringResult === "?" ? "" : "&") +
      "numericalfilter=" +
      getListNumericalQueryConverter(filter.numericalfilter);
  }
  if (filter.postin && filter.postin.length > 0) {
    queryStringResult =
      queryStringResult +
      (queryStringResult === "?" ? "" : "&") +
      "postin=" +
      filter.postin.reduce((acc, curr, index) => {
        acc += (index > 0 ? "," : "") + curr;
        return acc;
      });
  }
  return queryStringResult === "?" ? "" : queryStringResult;
};

export const getListQueryConverter = (taxinomieList) => {
  

  return Object.values(taxinomieList).reduce((acc, curr, index) => {
    const { taxinomyKey, value } = curr;
    const queryItem =
      taxinomyKey +
      "=" +
      value.reduce((acc2, currentValue, currentIndex) => {
        acc2 += (currentIndex > 0 ? "," : "") + currentValue;
        return acc2;
      });
    acc = acc + (index > 0 ? "!" : "") + queryItem;
    return acc;
  },"");

};

export const getListNumericalQueryConverter = (numericList) => {
  return numericList
    .map((numfilter) => numfilter.key + numfilter.operator + numfilter.value)
    .reduce((acc, curr, index) => {
      acc += (index > 0 ? "!" : "") + curr;
      return acc;
    });
};


export const getAddNumericalFilterInFilter = (key, operator, value, initialFilter) => {
  const {numericalfilter} = initialFilter;
  if (numericalfilter === null || numericalfilter.length <= 0){
    return {
      ...initialFilter,
      numericalfilter: [{
        key, operator, value
      }]
    }
  }

  if(Array.isArray(numericalfilter)){
    let isAdded = false;
    const newNumericalFilter = numericalfilter.map(filterItem => {
      const {key: keyItem, operator: operatorItem, value: valueItem} = filterItem

      if(keyItem === key && operatorItem === operator){
        isAdded = true;
        return {key, operator, value}
      }
    })
    if(isAdded){
      return {...initialFilter, numericalfilter: newNumericalFilter}
    }else{
      return {...initialFilter, numericalfilter: [...numericalfilter,{
        key, operator, value
      }]}
    }

  }
  

}

export const getRemoveNumericalFilterInFilter = (key, operator, initialFilter) => {

  const {numericalfilter} = initialFilter;
  if(numericalfilter === null || !Array.isArray(numericalfilter) || numericalfilter.length <=0){
    return {...initialFilter, numericalfilter: null}
  }

  const newNumericalFilter = numericalfilter.filter(item => {
    const {key: itemKey, operator: itemOperator} = item;
      return !(key === itemKey && operator === itemOperator)
  
  });
  
  return {...initialFilter, numericalfilter: newNumericalFilter.length >0 ? newNumericalFilter : null}
}

