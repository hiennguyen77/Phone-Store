import filterReducer from "./filter/reducer";
import productReducer from "./products/reducer";

const rootReducer = (state, action) => {
  return {
    filters: filterReducer(state.filters, action),
    products: productReducer(state.products, action),
  };
};

export default rootReducer;
