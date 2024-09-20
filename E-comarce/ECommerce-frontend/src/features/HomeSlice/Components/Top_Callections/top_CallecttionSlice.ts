import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../../../hooks/axiosInstance/axiosInstance";
export type svgobject = {width:string,height:string,viewBox:string,fill:string,xmlns:string,paths:string[]}

export type top_calletion = {
    _id:string,
    name:string,
    svg:svgobject
}

interface tob_callection_state {
    items:top_calletion[],
    loading: boolean,
    error: null | string,
    

}

const initialState:tob_callection_state = {
    items:[],
    loading:false,
    error:null,
}

export const fetchTobCallciton = createAsyncThunk<top_calletion[]>("tob_collction/fetchTobCalltion",async() => {
  const response = await axios.get('/top_calletions')
  return response.data
})

const topCallectionsSlice = createSlice({
    name:"top",
    initialState,
    reducers:{    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchTobCallciton.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTobCallciton.fulfilled,(state,action:PayloadAction<top_calletion[]>) => {
                 state.loading = false
                 state.items = action.payload
            })
            .addCase(fetchTobCallciton.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "someting is worng"
            })

    }
})

export default topCallectionsSlice.reducer;