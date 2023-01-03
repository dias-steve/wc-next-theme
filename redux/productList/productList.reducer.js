import productListTypes from './productList.types'

export const INITIAL_STATE = {
    filter : {
        cat: []
    },
    product_list: [],
    is_loading: false,
    pagination: {
        current_page: 1,
        page_nb_max: 1,
        nb_product_found:1
    }
}

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