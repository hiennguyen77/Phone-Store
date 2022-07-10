export const types = {
  FETCH_PRODUCT_SUCCESS: " FETCH_PRODUCT_SUCCESS",
  FETCH_PRODUCT_FAILURE: " FETCH_PRODUCT_FAILURE",
  SHOW_MORE: "SHOW_MORE",
  SEARCH_PRODUCT: " SEARCH_PRODUCT",
  FILTER_BRAND: "FILTER_BRAND",
  SET_FILTER_PRICE: "SET_FILTER_PRICE",
  SET_SORTING: "SET_SORTING",
  DETAIL_PRODUCT: "DETAIL_PRODUCT",
  ADD_PRODUCT_CART: "ADD_PRODUCT_CART",
  DELETE_PRODUCT_CART: "DELETE_PRODUCT_CART",
  TAKE_OUT1_PRODUCT_CART: "TAKE_OUT1_PRODUCT_CART",
  SUBMIT_FORM: "SUBMIT_FORM",
};

export const fetchProductSuccess = (payload) => {
  return {
    type: types.FETCH_PRODUCT_SUCCESS,
    payload,
  };
};
export const fetchProductFailure = (payload) => {
  return {
    type: types.FETCH_PRODUCT_FAILURE,
    payload,
  };
};
export const showMore = (payload) => {
  return {
    type: types.SHOW_MORE,
    payload,
  };
};
export const searchProduct = (payload) => {
  return {
    type: types.SEARCH_PRODUCT,
    payload,
  };
};
export const filterBrand = (payload) => {
  return {
    type: types.FILTER_BRAND,
    payload,
  };
};
export const setFilterPrice = (payload) => {
  return {
    type: types.SET_FILTER_PRICE,
    payload,
  };
};
export const setSorting = (payload) => {
  return {
    type: types.SET_SORTING,
    payload,
  };
};
export const setDetailProduct = (payload) => {
  return {
    type: types.DETAIL_PRODUCT,
    payload,
  };
};
export const setAddCartProduct = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART,
    payload,
  };
};
export const setDeleteCartProduct = (payload) => {
  return {
    type: types.DELETE_PRODUCT_CART,
    payload,
  };
};
export const takeout1Product = (payload) => {
  return {
    type: types.TAKE_OUT1_PRODUCT_CART,
    payload,
  };
};
export const submitForm = (payload) => {
  return {
    type: types.SUBMIT_FORM,
    payload,
  };
};
