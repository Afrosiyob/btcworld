import React from "react";

import About from "../../layouts/main/about/About";
import Footer from "../../layouts/main/footer/Footer";
import Header from "../../layouts/main/header/Header";
import Help from "../../layouts/main/help/Help";
import News from "../../layouts/main/news/News";

import TopNavBar from "../../layouts/main/topnavbar/TopNavBar";

function Main() {
  return (
    <div>
      <TopNavBar />
      <Header />
      <About />
      <News />
      <Help />
      <Footer />
    </div>
  );
}

export default Main;
