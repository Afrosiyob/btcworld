import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import About from "../../layouts/main/about/About";
import Footer from "../../layouts/main/footer/Footer";
import Header from "../../layouts/main/header/Header";
import Help from "../../layouts/main/help/Help";
import News from "../../layouts/main/news/News";

import TopNavBar from "../../layouts/main/topnavbar/TopNavBar";
import { activateUser } from "../../store/auth/action";

function Main() {
  const { id, token } = useParams();
  const formData = new FormData();

  formData.append("id", id);
  formData.append("token", token);
  const dispatch = useDispatch();
  const real_token = localStorage.getItem("token");

  console.log("  ====================================");
  console.log(token);
  console.log("====================================");

  useEffect(() => {
    if (!real_token && id && token) {
      dispatch(activateUser(formData));
    }
  });

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
