import { combineReducers } from "redux";
import { userReducer } from "./auth/reducer";

export const rootReducer = combineReducers({
  userReducer,
});
