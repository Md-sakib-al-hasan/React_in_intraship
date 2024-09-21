import { createBrowserRouter } from "react-router-dom";

import Home from "../../pages/Home/Home.tsx";
import RootLayout from "../../layout/RootLayout/RootLayout.tsx";
import Reset_passwrod from "../../pages/Reset_password/Reset_passwrod.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/reset_password",
        element:<Reset_passwrod></Reset_passwrod>
      }
    ],
  },
]);

export default Router;
