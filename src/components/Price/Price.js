import React from "react";
import Beta from "../Feature/beta/Beta";
import Navbar from "../navbar/Navbar";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "../Home/footer/Footer";
import Compare from "./compare/Compare";

function Price() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Compare />
      <Beta />
      <Footer />
    </div>
  );
}

export default Price;
