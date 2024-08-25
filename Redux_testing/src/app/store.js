import { configureStore } from "@reduxjs/toolkit";
import CountersReuder from "../features/counters/countersSlice"

const store = configureStore({
    reducer: {
        counters: CountersReuder,
    }
});

export default store;