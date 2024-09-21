import { configureStore } from "@reduxjs/toolkit";
import screncontroSlice from "../features/ScrenConroslicewhenOnClickHeaderMenu/screncontroSlice";

import homeReducer from "../features/HomeSlice/homeslice";
import login_and_RegisterReducer from "../features/Login_and_RegisterSlice/login_and_RegisterSlice";


const store = configureStore({
  reducer: {
    onclickScreenControler: screncontroSlice,
    home:homeReducer,
    user: login_and_RegisterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
