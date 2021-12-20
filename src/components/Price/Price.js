import React from "react";
import Beta from "../Feature/beta/Beta";
import Navbar from "../navbar/Navbar";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "../Home/footer/Footer";
import { useMediaQuery } from "react-responsive";
import { Compare, CompareTablet } from "./compare/Compare";

function Price() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      {isTablet ? <CompareTablet /> : <Compare />}
      <Beta />
      <Footer />
    </div>
  );
}

export default Price;
