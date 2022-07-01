import { types } from "./actions";

const initialState = {
  products: [],
  productErrorMessage: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }
    case types.FETCH_PRODUCT_FAILURE: {
      return {
        ...state,
        productErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
