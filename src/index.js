import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Story from "./components/Stories/Story";
import Feature from "./components/Feature/Feature";
import Price from "./components/Price/Price";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="stories" element={<Story />} />
      <Route path="features" element={<Feature />} />
      <Route path="pricing" element={<Price />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
