import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { About } from "../About";
import { Projects } from "../Projects";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
  ]);
};
