import React from "react";
import Header from "./header";
import Showcase from "./showcase/Display";
import Customize from "./showcase/Customize";
import About from "./about";
import Icon from "../micro/icon/Icon";
import Reviews from "./reviews";
import Featured from "./featured";

const Home = () => {
  return (
    <div className="2xl:mx-auto 2xl:container">
      <Header />
      <Icon/>
      <Showcase />
      <Featured/>
      <Customize/>
      <About/>
      <Reviews/>
    </div>
  );
};

export default Home;
