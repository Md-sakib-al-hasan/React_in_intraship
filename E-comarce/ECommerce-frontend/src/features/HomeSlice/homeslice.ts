import { combineReducers } from "@reduxjs/toolkit";
import bannerReducer from "./Components/BannerSlice/bannerSlice";
import topCallectionReducer from "./Components/Top_Callections/top_CallecttionSlice"
import demp from "./Components/demp/demp";
const homeSlice = combineReducers({
  banner: bannerReducer,
  topCalleciton: topCallectionReducer,
  demp:demp
});

export default homeSlice;
