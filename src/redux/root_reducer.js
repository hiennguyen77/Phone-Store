import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productReducer from "./products/productSlice";
import filterReducer from "./filter-sorting/filterSlice";
import cartReducer from "./cart/cartSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  filter: filterReducer,
});

export default persistReducer(persistConfig, rootReducer);

// https://github.com/ZhangMYihua/lesson-26-complete/blob/master/src/redux/root-reducer.js
