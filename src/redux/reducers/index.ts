import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./products"

const rootReducer = combineReducers({
   products : productReducer
});

export default rootReducer;
