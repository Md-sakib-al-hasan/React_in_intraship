import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Route/Route";
import Providers from "./Providers/Providers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={Router}></RouterProvider>
    </Providers>
  </StrictMode>
);
