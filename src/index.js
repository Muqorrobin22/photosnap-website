import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Story from "./components/Stories/Story";
import Feature from "./components/Feature/Feature";
import Price from "./components/Price/Price";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./index.css";
import ScrollToTop from "./components/utils/ScrollToTop";

const RoutePath = () => {
  const Location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        classNames="page"
        timeout={300}
        key={Location.key}
        unmountOnExit
      >
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="stories" element={<Story />} />
            <Route path="features" element={<Feature />} />
            <Route path="pricing" element={<Price />} />
          </Routes>
        </ScrollToTop>
      </CSSTransition>
    </TransitionGroup>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <RoutePath />
  </BrowserRouter>,
  document.getElementById("root")
);
