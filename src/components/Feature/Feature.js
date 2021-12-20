import React from "react";
import Header from "./header/Header";
import Navbar from "../navbar/Navbar";
import Main from "./main/Main";
import Footer from "../Home/footer/Footer";
import Beta from "./beta/Beta";

function Feature() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Beta />
      <Footer />
    </div>
  );
}

export default Feature;
