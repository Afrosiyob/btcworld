import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "../../layouts/main/about/About";
import Footer from "../../layouts/main/footer/Footer";
import Header from "../../layouts/main/header/Header";
import Help from "../../layouts/main/help/Help";
import News from "../../layouts/main/news/News";

import TopNavBar from "../../layouts/main/topnavbar/TopNavBar";
import { userAutoLogin } from "../../store/auth/action";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAutoLogin());
  }, [dispatch]);
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
