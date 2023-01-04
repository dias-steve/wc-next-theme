import productListTypes from "./productList.types";

export const setFilter = (filter) => (
    {
        type: productListTypes.SET_FILTER,
        payload: filter
    }
);

export const setProductList = (listProduct) => (
    {
        type: productListTypes.SET_PRODUCT_LIST,
        payload: listProduct
    }
)

export const setIsLoading = (isLoading) => (
    {
        type: productListTypes.SET_IS_LOADING,
        payload: isLoading
    }
)

export const setPagination = (paginationData) => (
    {
        type: productListTypes.SET_PAGINATION,
        payload: paginationData
    }
)

export const fetchProductListStart = (filter) => ({
    type: productListTypes.FETCH_PRODUCT_LIST_START,
    payload: filter
});