import { types } from "./actions";

const initialState = {
  products: [],
  productErrorMessage: null,
  showMore: 15,
  searchProduct: "",
};

const rootReducer = (state = initialState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case types.FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: [...action.payload],
      };
    }
    case types.FETCH_PRODUCT_FAILURE: {
      return {
        ...state,
        productErrorMessage: action.payload,
      };
    }
    case types.SHOW_MORE: {
      return {
        ...state,
        showMore: action.payload,
      };
    }
    case types.SEARCH_PRODUCT: {
      return {
        ...state,
        searchProduct: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
