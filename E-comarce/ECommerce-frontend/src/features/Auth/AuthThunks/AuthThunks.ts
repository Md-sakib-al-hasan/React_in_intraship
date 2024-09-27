import { createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadType, UserInfo } from "../AuthSlice/AuthSlice"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, User } from "firebase/auth";
import auth from "../../../firebase/Firebase";
import axios from "../../../hooks/axiosInstance/axiosInstance";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/web-extension";


// checked have and account and or if not create a account 

const checkeduserdataorSave 

const storeUserDataAndSetUserState = createAsyncThunk<UserInfo, User, { rejectValue: string }>(
    "auth/storeUserData",
    async (user, thunkAPI) => {
      try {
        const response = await axios.post('/api/users', {
          email: user.email,
          name: user.displayName || null,
          photoURL: user.photoURL,
        });
        // Return the stored user data
        return response.data.data;
      } catch (error) {
        console.log("error")
        return thunkAPI.rejectWithValue((error as Error).message);
      }
    }
  );

export const createAccountWithEmailAndPasswords = createAsyncThunk<UserInfo, PayloadType, { rejectValue: string }>(
    "auth/createAccount",
    async ({ email, password }, thunkAPI) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
       const result= await thunkAPI.dispatch(storeUserDataAndSetUserState(user)).unwrap();
         return result;
      } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message);
      }
    } 
  );


  // Sign in with Google
export const signInWithGoogle = createAsyncThunk<User, void, { rejectValue: string }>(
    "auth/signInWithGoogle",
    async (_, thunkAPI) => {
      try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result.user;
      } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message);
      }
    }
  );
  
  // Sign in with GitHub
  export const signInWithGithub = createAsyncThunk<User, void, { rejectValue: string }>(
    "auth/signInWithGithub",
    async (_, thunkAPI) => {
      try {
        const provider = new GithubAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result.user;
      } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message);
      }
    }
  );
  
  // Sign in with email and password
  export const signInWithEmailAndPasswordThunk = createAsyncThunk<User, PayloadType, { rejectValue: string }>(
    "auth/signInWithEmailAndPassword",
    async ({ email, password }, thunkAPI) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
      } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message);
      }
    }
  );
  
  // Logout
  export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
    "auth/logout",
    async (_, thunkAPI) => {
      try {
        await signOut(auth);
      } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message);
      }
    }
  );