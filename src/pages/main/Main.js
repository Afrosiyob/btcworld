import React from "react";
import { useParams } from "react-router-dom";

import About from "../../layouts/main/about/About";
import Footer from "../../layouts/main/footer/Footer";
import Header from "../../layouts/main/header/Header";
import Help from "../../layouts/main/help/Help";
import News from "../../layouts/main/news/News";

import TopNavBar from "../../layouts/main/topnavbar/TopNavBar";

function Main() {
  const { id, token } = useParams();

  
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
