import { configureStore } from "@reduxjs/toolkit";
import screncontroSlice from "../features/ScrenConroslicewhenOnClickHeaderMenu/screncontroSlice";

import homeReducer from "../features/HomeSlice/homeslice";
import AuthSlice from "../features/Auth/AuthSlice/AuthSlice";


const store = configureStore({
  reducer: {
    onclickScreenControler: screncontroSlice,
    home:homeReducer,
    user: AuthSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
