import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productReducer";
import { filterReducer } from "./reducers/filterreducer";

const store = createStore(productReducer, composeWithDevTools());

export default store;
