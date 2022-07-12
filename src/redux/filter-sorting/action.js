export const types = {
  SEARCH_PRODUCT: " SEARCH_PRODUCT",
  FILTER_BRAND: "FILTER_BRAND",
  SET_FILTER_PRICE: "SET_FILTER_PRICE",
  SET_SORTING: "SET_SORTING",
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
