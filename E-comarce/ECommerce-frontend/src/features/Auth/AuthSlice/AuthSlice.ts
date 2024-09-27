import { createSlice,  PayloadAction } from "@reduxjs/toolkit";
import {

  User,
} from "firebase/auth";
import { createAccountWithEmailAndPasswords, logout, signInWithEmailAndPasswordThunk, signInWithGithub, signInWithGoogle } from "../AuthThunks/AuthThunks";

// Define an interface for the state
export interface UserInfo {
  email: string | null;
  name: string | null;
  photoURL: string | null;

}
interface showandhidden {
  login:boolean,
  profile:boolean,
}

interface AuthState {
  user: UserInfo | null;
  loading: boolean;
  error: string | null;
  showorhidden:showandhidden;
  }


// Define an interface for the payload type
 export interface PayloadType {
  email: string;
  password: string;
}

// Initial state
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  showorhidden:{login:false,profile:false},
};



// Slice
const Login_RegisterSlice = createSlice({
  name: "Login_Register",
  initialState,
  reducers: {
         showOrHidden:(state,action:PayloadAction<boolean>) => {
                if(state.user){
                  state.showorhidden.profile =  !state.showorhidden.profile
                }else{
                  state.showorhidden.login = action.payload
                }
         },

         setAuthuser:(state,action:PayloadAction<User | null>) => {
            if(action.payload){
              const user = action.payload;
              state.user = {
                email: user.email,
                name: user.displayName || null,
                photoURL: user.photoURL,
              };
            }
            else{
              state.user = null;
            }
         }


  },
  extraReducers: (builder) => {
    builder
      // Create account
.addCase(createAccountWithEmailAndPasswords.pending,(state) => {
  state.loading = true;
})
.addCase(createAccountWithEmailAndPasswords.fulfilled, (state, action: PayloadAction<UserInfo | null>) => {
  state.loading = false;
  state.showorhidden.login = false
  state.user = action.payload;
})
      
.addCase(createAccountWithEmailAndPasswords.rejected, (state, action: PayloadAction<string | undefined>) => {
  state.loading = false;
  state.error = action.payload || null;
})
// Sign in with Google
.addCase(signInWithGoogle.pending, (state) => {
  state.loading = true;
})
.addCase(signInWithGoogle.fulfilled, (state, action: PayloadAction<User>) => {
  state.loading = false;
  state.showorhidden.login =false;
  const user = action.payload;
  state.user = {
    email: user.email,
    name: user.displayName || null,
    photoURL:user.photoURL,
  };
})
.addCase(signInWithGoogle.rejected, (state, action: PayloadAction<string | undefined>) => {
  state.loading = false;
  state.error = action.payload || null;
})
// Sign in with GitHub
.addCase(signInWithGithub.pending, (state) => {
  state.loading = true;
})
.addCase(signInWithGithub.fulfilled, (state, action: PayloadAction<User>) => {
  state.loading = false;
  state.showorhidden.login =false;
  const user = action.payload;
  state.user = {
    email: user.email,
    name: user.displayName || null,
    photoURL:user.photoURL,
  };
})
.addCase(signInWithGithub.rejected, (state, action: PayloadAction<string | undefined>) => {
  state.loading = false;
  state.error = action.payload || null;
})
// Sign in with email and password
.addCase(signInWithEmailAndPasswordThunk.pending, (state) => {
  state.loading = true;
})
.addCase(signInWithEmailAndPasswordThunk.fulfilled, (state, action: PayloadAction<User>) => {
  state.loading = false;
  state.showorhidden.login =false;
  const user = action.payload;
  state.user = {
    email: user.email,
    name: user.displayName || null,
    photoURL:user.photoURL,
  };
})
.addCase(signInWithEmailAndPasswordThunk.rejected, (state, action: PayloadAction<string | undefined>) => {
  state.loading = false;
  state.error = action.payload || null;
})
// Logout
.addCase(logout.fulfilled, (state) => {
  state.user = null;
  state.showorhidden.login =false;
  state.showorhidden.profile =false;
})
.addCase(logout.rejected, (state, action: PayloadAction<string | undefined>) => {
  state.error = action.payload || null;
});



      
  },
});

export default Login_RegisterSlice.reducer;

export const {showOrHidden,setAuthuser} = Login_RegisterSlice.actions


