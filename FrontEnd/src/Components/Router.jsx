import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Provider from "./Context/Provider";
import NavBar from "../Pages/Home/NavBar";
import Unsubscribe from "../Pages/Suscription/Unsubscribe";

const Router = () => {
  return (
    <BrowserRouter>
      <Provider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unsubscribe/:id" element={<Unsubscribe />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
export default Router;
