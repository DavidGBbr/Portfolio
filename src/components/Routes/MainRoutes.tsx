import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { About } from "../About";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);
};
