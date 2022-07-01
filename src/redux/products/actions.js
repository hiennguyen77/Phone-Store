export const types = {
  FETCH_PRODUCT_SUCCESS: "FETCH_PRODUCT_SUCCESS",
  FETCH_PRODUCT_FAILURE: "FETCH_PRODUCT_FAILURE",
};

export const fetchProductSuccess = () => ({
  type: types.FETCH_PRODUCT_SUCCESS,
});
export const fetchProductFailure = (payload) => ({
  type: types.FETCH_PRODUCT_FAILURE,
  payload,
});
