import { types } from "./actions";
import {
  filterPriceData,
  sorting,
} from "../components/pages/homePage/Filter/data";

const initialState = {
  products: [],
  productErrorMessage: null,
  showMore: 15,
  searchProduct: "",
  filterBrand: [],
  filterPrice: filterPriceData[0],
  filterSorting: sorting[0],
};

const rootReducer = (state = initialState, action) => {
  console.log(state, action);
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
    case types.FILTER_BRAND: {
      const { filterBrand } = state;
      if (state.filterBrand.includes(action.payload)) {
        return {
          ...state,
          filterBrand: filterBrand.filter((x) => x !== action.payload),
        };
      } else {
        return {
          ...state,
          filterBrand: [action.payload],
        };
      }
    }

    case types.SET_FILTER_PRICE: {
      return {
        ...state,
        filterPrice: action.payload,
      };
    }
    case types.SET_SORTING: {
      console.log(action.payload);
      return {
        ...state,
        filterSorting: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
