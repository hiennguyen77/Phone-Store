import { types } from "./actions";

const initialState = {
  searchValue: "",
  brandFilter: [],
  priceFilter: [],
  sortFilter: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
