import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import auth from "../../../../firebase/Firebase";


interface payloadtype {
  email: string;
  password: string;
}

// Thunks for async actions
export const signInWithGooglesk = createAsyncThunk(
  "auth/signInWithGoogle",
  async (_, thunkAPI) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const demp = createSlice({
  name: "Login_Register",
  initialState: {},
  reducers: {
    // Reducer logic here
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithGooglesk.fulfilled, (state, action) => {
        console.log("User signed in:", action.payload);
      })
      .addCase(signInWithGooglesk.rejected, (state, action) => {
        console.log("Sign in failed:", action.payload);
      });
  },
});

export default demp.reducer;

