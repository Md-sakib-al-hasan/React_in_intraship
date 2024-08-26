import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Router from "./Routes/Route/Route";
import { RouterProvider } from "react-router-dom";
import Provider from "./providers/Provider/Provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>
);
