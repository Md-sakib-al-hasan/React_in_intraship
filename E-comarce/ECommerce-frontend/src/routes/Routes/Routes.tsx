import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main.tsx";
import Home from "../../pages/Home/Home.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
