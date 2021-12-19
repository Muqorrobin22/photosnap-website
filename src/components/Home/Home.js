import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import Stories from "./stories/Stories";
import Feature from "./feature/Feature";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Stories />
      <Feature />
      <Footer />
    </div>
  );
}

export default Home;
