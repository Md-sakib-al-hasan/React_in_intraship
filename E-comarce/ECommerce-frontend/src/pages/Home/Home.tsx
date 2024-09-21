import { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Banner from "./components/Banner/Banner";
import TopCategories from "./components/TopCategories/TopCategories";


const Home = () => {
     const [loginAndRegistercontroller,setLoginAndRegistercontroller] = useState<boolean>(false)
    return (
        <div>
            <section>
                {loginAndRegistercontroller?<Login setLoginAndRegistercontroller={setLoginAndRegistercontroller}></Login>:<Register  setLoginAndRegistercontroller={setLoginAndRegistercontroller} ></Register>}
                
                
            </section>
            <section>
            <Banner></Banner>
            </section>
            <section>
                <TopCategories></TopCategories>
            </section>
            
        </div>
    );
};

export default Home;