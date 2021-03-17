import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import allReducers from "../reducers";

//Initial State
const initialState = {};

//middleWare with thunk
const middleWare = [thunk];

//create store
const store = createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

//export the store
export default store;
