import { combineReducers } from "redux";
import productReducer from "./products/reducer";
import filterReducer from "./filter-sorting/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  filter: filterReducer,
});

export default rootReducer;
