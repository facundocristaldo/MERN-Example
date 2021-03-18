import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";

const allReducers = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  profile: profileReducer
});

export default allReducers;
