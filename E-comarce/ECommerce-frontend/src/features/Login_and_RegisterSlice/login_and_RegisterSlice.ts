import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/Firebase";

interface payloadtype  {
    email:string ;
    password: number | any ;
}

const Login_RegisterSlice = createSlice({
    name:"Login_Register",
    initialState: {},
    reducers: {
        SignWithEamilandPassword : (state,action:PayloadAction<payloadtype>) => {
            const {email,password} = action.payload
             console.log("this is locaaly",email,password)
            createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                 const user = userCredential.user;
                 console.log(user)
            })   
        }

       
    }
})

export default Login_RegisterSlice.reducer;

export const {SignWithEamilandPassword} = Login_RegisterSlice.actions;