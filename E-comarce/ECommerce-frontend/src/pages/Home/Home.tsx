import { useEffect, useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Banner from "./components/Banner/Banner";
import TopCategories from "./components/TopCategories/TopCategories";
import Profile from "../../components/Profile/Profile";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase/Firebase";
import { setAuthuser } from "../../features/Auth/AuthSlice/AuthSlice";
import Loginssss  from "../Home/components/demo"



const Home = () => {
     const [loginAndRegistercontroller,setLoginAndRegistercontroller] = useState<boolean>(false)
     const dispatch:AppDispatch = useDispatch()
     useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth,currentUser => {
                dispatch(setAuthuser(currentUser))
        })
        return () => {
            unSubcribe()
        }
     },[])

    return (
        <div>
            <Profile></Profile>
            <section>
                {loginAndRegistercontroller?<Register  setLoginAndRegistercontroller={setLoginAndRegistercontroller} ></Register>:<Login setLoginAndRegistercontroller={setLoginAndRegistercontroller}></Login>}
                
                
            </section>
            <section>
            <Banner></Banner>
            </section>
            <section>
                <TopCategories></TopCategories>
            </section>
            <section>
                 <Loginssss></Loginssss>
            </section>
            
        </div>
    );
};

export default Home;