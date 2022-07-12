export const types = {
  DETAIL_PRODUCT: "DETAIL_PRODUCT",
  ADD_PRODUCT_CART: "ADD_PRODUCT_CART",
  DELETE_PRODUCT_CART: "DELETE_PRODUCT_CART",
  TAKE_OUT1_PRODUCT_CART: "TAKE_OUT1_PRODUCT_CART",
  SUBMIT_FORM: "SUBMIT_FORM",
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
