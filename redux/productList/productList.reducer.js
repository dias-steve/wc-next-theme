export const productListTypes = {
    SET_FILTER: 'SET_FILTER',
    SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
    SET_IS_LOADING: 'SET_IS_LOADING',
    SET_PAGINATION: 'SET_PAGINATION',

    ADD_CATEGORY_FILTER: 'ADD_CATEGORY_FILTER',
    REMOVE_CATEGORY_FILTER: 'REMOVE_CATEGORY_FILTER',
    
    SET_SORT_FILTER: 'SET_SORT_FILTER',
    FETCH_PRODUCT_LIST_START: 'FETCH_PRODUCT_LIST_START',

    SET_FILTER_START: 'SET_FILTER_START',
}



export const INITIAL_STATE = {
    filter : {
        taxinomy:null,
        sort:null,
        limit:null,
        page:null,
        postin: null,
        numericalfilter:[

        ]
    },
    product_list: [],
    is_loading: false,
    pagination: {
        current_page: 1,
        page_nb_max: 1,
        nb_product_found:1
    }
}


/*=============================================
=            ACTIONS            =
=============================================*/



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

export const addCategoryToFilter = (idCategory) => (
    {
        type: productListTypes.ADD_CATEGORY_FILTER,
        payload: idCategory
    }

)

export const removeCategoryToFilter = (idCategory) => (
    {
        type: productListTypes.REMOVE_CATEGORY_FILTER,
        payload: idCategory
    }
)

export const fetchProductListStart = (filter) => ({
    type: productListTypes.FETCH_PRODUCT_LIST_START,
    payload: filter
});

export const setFilterStartAction = (filter) => ({
    type: productListTypes.SET_FILTER_START,
    payload: filter
})

export const setSortFilterAction = (sort) => ({
    type: productListTypes.SET_SORT_FILTER,
    payload: sort
});

/*=====  End of ACTIONS  ======*/



const productListReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case productListTypes.SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        
        case productListTypes.SET_PRODUCT_LIST:
            return {
                ...state,
                product_list: action.payload
            }
        
        case productListTypes.SET_IS_LOADING:
            return {
                ...state,
                is_loading: action.payload
            }
        
        case productListTypes.SET_PAGINATION:
            return {
                ...state,
                pagination: action.payload
            }
        
        default:
            return state;
    }
}


export default productListReducer;