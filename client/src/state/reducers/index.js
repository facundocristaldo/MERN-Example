import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";

const allReducers = combineReducers({ alert: alertReducer, auth: authReducer });

export default allReducers;
