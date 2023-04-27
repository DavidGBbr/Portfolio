import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainRoutes } from "./components/Routes/MainRoutes";

const App = () => {
  return (
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
