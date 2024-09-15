import { createSlice } from "@reduxjs/toolkit";

// Define the type for the state
type ScreenControlState = boolean;

const initialState: ScreenControlState = false;

const screncontroSlice = createSlice({
  name: 'screncontrol',
  initialState,
  reducers: {
    handelscrencontroler: (state: ScreenControlState) => {
      return !state; // Toggle the state
    }
  }
});

export default screncontroSlice.reducer;

// Exporting the action creator
export const { handelscrencontroler } = screncontroSlice.actions;
