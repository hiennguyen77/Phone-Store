import { types } from "./action";

const initialState = {
  detailProduct: {},
  cartProduct: [],

  submitForm: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default cartReducer;
