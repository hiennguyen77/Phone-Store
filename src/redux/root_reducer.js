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
  detailProduct: {},
  cartProduct: [],

  submitForm: {},
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
    case types.DETAIL_PRODUCT: {
      return {
        ...state,
        detailProduct: action.payload,
      };
    }

    case types.ADD_PRODUCT_CART: {
      const existingItem = state.cartProduct.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const newCart = state.cartProduct.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );

        return {
          ...state,
          cartProduct: newCart,
        };
      }
      return {
        ...state,
        cartProduct: [...state.cartProduct, action.payload],
      };
    }

    case types.DELETE_PRODUCT_CART: {
      const newCart = state.cartProduct.filter((x) => x.id !== action.payload);
      // console.log(newCart);
      return {
        ...state,
        cartProduct: newCart,
      };
    }

    case types.TAKE_OUT1_PRODUCT_CART: {
      const newCart = state.cartProduct.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      return {
        ...state,
        cartProduct: newCart,
      };
    }
    case types.SUBMIT_FORM: {
      return {
        ...state,
        submitForm: action.payload,
        cartProduct: [],
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
