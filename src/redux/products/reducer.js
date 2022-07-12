import { types } from "./action";

const initialState = {
  products: [],
  productErrorMessage: null,
  showMore: 15,
};

const productReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default productReducer;
