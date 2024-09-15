import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../../../hooks/axiosInstance/axiosInstance";
type Banner = {
    id:number;
    title:string;
    img:string;
}

interface Banner_All_type_State {
    banners:Banner[];
    loading:boolean;
    error: string | null; 
}


// axios.get('banner');

export const fetchBanners = createAsyncThunk<Banner[]>('banners/fetchBanners',async() => {
    const response = await axios.get("/banner") 
    return response.data 
})
const initialState:Banner_All_type_State = {
    banners:[],
    loading:false,
    error:null,
}

const bannerSlice = createSlice({
    name:"banner",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
           .addCase(fetchBanners.pending,(state) => {
             state.loading = true;
           })
           .addCase(fetchBanners.fulfilled,(state,action:PayloadAction<Banner[]>)=> {
              state.loading =false;
              state.banners = action.payload;

           })
           .addCase(fetchBanners.rejected,(state,action) => {
               state.loading =false;
               state.error = action.error.message || "someting went wrong";

           })

    }

})

export default bannerSlice.reducer;


