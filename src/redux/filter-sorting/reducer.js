import { types } from "./action";
import {
  filterPriceData,
  sorting,
} from "../../components/pages/homePage/Filter/data.js";

const initialState = {
  searchProduct: "",
  filterBrand: [],
  filterPrice: filterPriceData[0],
  filterSorting: sorting[0],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
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
      return {
        ...state,
        filterSorting: action.payload,
      };
    }

    default:
      return state;
  }
};

export default filterReducer;
