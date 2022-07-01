import { createStore } from "redux";
import rootReducer from "./root_reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composedEnhancers);

export default store;
