import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loadin from "../../pages/Loading/loading";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Suspense fallback={<Loadin></Loadin>}>
                <Outlet/>
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default Main;