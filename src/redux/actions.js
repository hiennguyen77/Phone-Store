export const types = {
  FETCH_PRODUCT_SUCCESS: " FETCH_PRODUCT_SUCCESS",
  FETCH_PRODUCT_FAILURE: " FETCH_PRODUCT_FAILURE",
  SHOW_MORE: "SHOW_MORE",
  SEARCH_PRODUCT: " SEARCH_PRODUCT",
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
