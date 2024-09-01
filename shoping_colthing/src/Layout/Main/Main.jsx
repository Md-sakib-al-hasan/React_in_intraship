import { Suspense, useContext } from "react";
import { Outlet } from "react-router-dom";
import Loadin from "../../pages/Loading/Loading";
import Navigationbarr from "../../components/Header/NavigationBar/Navigationbarr";
import { Allprovers } from "../../Providers/Providers";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  const { contromenu, lgscreenscroll } = useContext(Allprovers);
  return (
    <div className="max-w-[1536px] mx-auto">
      <header>
        <Navigationbarr></Navigationbarr>
      </header>
      <main>
        <Suspense fallback={<Loadin />}>
          {/* control small to md screen  */}
          <div
            className="lg:hidden overflow-hidden "
            style={
              contromenu
                ? { height: "calc(100vh - 100px)" }
                : { height: "auto" }
            }
          >
            <Outlet />
          </div>
          {/* control the lg to big screen  */}
          <div
            className="lg:block hidden overflow-hidden "
            style={
              lgscreenscroll
                ? { height: "calc(100vh - 39px)" }
                : { height: "auto" }
            }
          >
            <Outlet />
          </div>
        </Suspense>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Main;
