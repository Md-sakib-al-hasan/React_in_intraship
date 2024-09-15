import { combineReducers } from "@reduxjs/toolkit";
import bannerReducer from "./Components/BannerSlice/bannerSlice";

const homeSlice = combineReducers({
  banner: bannerReducer,
});

export default homeSlice;
