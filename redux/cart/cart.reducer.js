

/**
 * [
 *  {
 *  id,name,thumnail,price,quatity
 *  }
 * ]
 * 
 * total_amount:0
 */
export const INITIAL_STATE = {
    productlist:[],
    total_amount:0,
    total_quantity:0
}
/*=============================================
=            TYPES            =
=============================================*/

export const cartTypes = {
    SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
    SET_TOTAL_QUANTITY:'SET_TOTAL_QUANTITY',
    SET_TOTAL_AMOUNT:'SET_TOTAL_AMOUNT',
    ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
    REMOVE_PRODUCT_TO_CART: 'REMOVE_PRODUCT'
}



/*=============================================
=            ACTIONS            =
=============================================*/

export const setProductList = (productlist) => ({
    type: cartTypes.SET_PRODUCT_LIST,
    payload: productlist
})

export const setTotalAmount = (total) => ({
    type: cartTypes.SET_TOTAL_AMOUNT,
    payload: total
})

export const setTotalQuantity= (total) => ({
    type: cartTypes.SET_TOTAL_QUANTITY,
    payload: total
})

export const addProductToCart= (product) => ({
    type: cartTypes.ADD_PRODUCT_TO_CART,
    payload: product
})

export const removeProductToCart = (id) => ({
    type: cartTypes.REMOVE_PRODUCT_TO_CART,
    payload: id
})

/*=============================================
=            REDUCER            =
=============================================*/

const cartReducer = (state=INITIAL_STATE , action) =>{

    switch (action.type){
        case cartTypes.SET_PRODUCT_LIST :
            return {...state, productlist:action.payload};
        case cartTypes.SET_TOTAL_QUANTITY :
            return {...state, total_quantity:action.payload};
        case cartTypes.SET_TOTAL_AMOUNT :
            return {...state, total_amount:action.payload};
        default:
            return state;
    }
} 

export default cartReducer;



