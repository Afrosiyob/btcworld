import { combineReducers } from "redux";
import { userReducer } from "./auth/reducer";
import { plansReducer } from "./plans/reducer";
import { productReducer } from "./products/reducer";
import { treeReducer } from "./tree/reducer";

export const rootReducer = combineReducers({
  userReducer,
  treeReducer,
  productReducer,
  plansReducer,
});
