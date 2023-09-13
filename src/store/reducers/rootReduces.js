import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice";

export const rootReducer = combineReducers({
  data: dataReducer,
})