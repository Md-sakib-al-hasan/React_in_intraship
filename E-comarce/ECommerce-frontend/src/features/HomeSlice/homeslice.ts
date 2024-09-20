import { combineReducers } from "@reduxjs/toolkit";
import bannerReducer from "./Components/BannerSlice/bannerSlice";
import topCallectionReducer from "./Components/Top_Callections/top_CallecttionSlice"
const homeSlice = combineReducers({
  banner: bannerReducer,
  topCalleciton: topCallectionReducer,
});

export default homeSlice;
