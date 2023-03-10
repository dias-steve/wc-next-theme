const INITIAL_STATE = {
  product_selected: {
    id_parent: 0,
    id: 0,
    name: "",
    price: "",
    stock_status: "",
    img: "",
    unique: false,
    idlink: 0,
    regular_price: "",
    thumnail: {
      url: "",
      alt: "",
    },
    on_sale: false,
    regular_price: "",
    product_is_in_stock: null,
    shipping_cost_unit: null,
    sold_individualy: false
  },
  product_parent: {
    title: "",
    product_is_individual: null,
    images_gallery: [],
    children: [],
    list_variations: [],
    variations_selected: null,
  },

  variation_list_detail: {},
  list_variations: [],
  variations_selected: {},
  variations_stock_status: {},

  product_is_valid: true,
};

/*=============================================
=            TYPES           =
=============================================*/

export const singleProductTypes = {
  SET_SELECTED_PRODUCT: "SET_SELECTED_PRODUCT",
  SET_PRODUCT_PARENT: "SET_PRODUCT_PARENT",
  SET_LIST_VARIATIONS: "SET_LIST_VARIATIONS",
  SET_VARIATION_SELECTED: "SET_VARIATION_SELECTED",
  ON_SET_PRODUCT_PARENT_START: "ON_SET_PRODUCT_PARENT_START",
  SET_LIST_VARIATION_SELECTED_START: "ON_SET_LIST_VARIATION_SELECTE_START",
  SET_VARIATION_STOCK_STATUS: "SET_VARIATION_STOCK_STATUS",
  SET_VARIATION_LIST_DETAIL: "SET_VARIATION_LIST_DETAIL",
  SET_PRODUCT_IS_VALID: "SET_PRODUCT_IS_VALID",
};

/*----------  End Types  ----------*/

/*=============================================
=            ACTIONS          =
=============================================*/

export const setSelectedProduct = (product) => ({
  type: singleProductTypes.SET_SELECTED_PRODUCT,
  payload: product,
});

export const setProductParent = (parentProduct) => ({
  type: singleProductTypes.SET_PRODUCT_PARENT,
  payload: parentProduct,
});

export const setListVariations = (list) => ({
  type: singleProductTypes.SET_LIST_VARIATIONS,
  payload: list,
});

export const setVariationSelected = (varationsObject) => ({
  type: singleProductTypes.SET_VARIATION_SELECTED,
  payload: varationsObject,
});

export const setParentProductStart = (product) => ({
  type: singleProductTypes.ON_SET_PRODUCT_PARENT_START,
  payload: product,
});

export const setVariationSelectedStart = (listVariation) => ({
  type: singleProductTypes.SET_LIST_VARIATION_SELECTED_START,
  payload: listVariation,
});

export const setVariationStockStatus = (variations_stock_status) => ({
  type: singleProductTypes.SET_VARIATION_STOCK_STATUS,
  payload: variations_stock_status,
});

export const setVariationListDetailed = (variations_list_detail) => ({
  type: singleProductTypes.SET_VARIATION_LIST_DETAIL,
  payload: variations_list_detail,
});

export const setProductiSValidAction = (isValid) => ({
  type: singleProductTypes.SET_PRODUCT_IS_VALID,
  payload: isValid

})
/*----------  End Types  ----------*/

/*=============================================
=            Reducer            =
=============================================*/
const singleProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case singleProductTypes.SET_PRODUCT_PARENT:
      return { ...state, product_parent: action.payload };
    case singleProductTypes.SET_SELECTED_PRODUCT:
      return { ...state, product_selected: action.payload };
    case singleProductTypes.SET_LIST_VARIATIONS:
      return { ...state, list_variations: action.payload };
    case singleProductTypes.SET_VARIATION_SELECTED:
      return { ...state, variations_selected: action.payload };

    case singleProductTypes.SET_VARIATION_STOCK_STATUS:
      return { ...state, variations_stock_status: action.payload };

    case singleProductTypes.SET_VARIATION_LIST_DETAIL:
      return { ...state, variation_list_detail: action.payload };

    case singleProductTypes.SET_PRODUCT_IS_VALID:
      return { ...state, product_is_valid: action.payload };
    default:
      return state;
  }
};

export default singleProductReducer;
