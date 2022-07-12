import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root_reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// const composedEnhancers = composeWithDevTools();
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

// https://github.com/ZhangMYihua/lesson-26-complete/blob/master/src/redux/store.js

// import { configureStore } from "@reduxjs/toolkit";
// import productSlice from "./products/productSlice";
// import filterSlice from "./filter-sorting/filterSlice";
// import cartSlice from "./cart/cartSlice";
// const store = configureStore({
//   reducer: {
//     products: productSlice.reducer,
//     cart: cartSlice.reducer,
//     filter: filterSlice.reducer,
//   },
// });
