export const types = {
  SEARCH_VALUE: "SEARCH_VALUE",
};

export const searchValue = (payload) => ({
  type: types.SEARCH_VALUE,
  payload,
});
