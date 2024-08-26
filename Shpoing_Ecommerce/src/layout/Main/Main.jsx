import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Loading from "../../pages/Loading/Loading";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default Main;
