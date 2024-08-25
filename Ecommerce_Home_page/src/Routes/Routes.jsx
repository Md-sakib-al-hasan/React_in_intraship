import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home_1 from "../page/home/home_1/Home_1";
import Home_2 from "../page/home/home_2/Home_2";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home_1></Home_1>,
      },
      {
        path: "/home_2",
        element: <Home_2></Home_2>,
      },
    ],
  },
]);

export default Router;
