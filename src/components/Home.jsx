import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category";
import MenuSection from "./menu/MenuSection";
import Featured from "./Featured/Featured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <MenuSection></MenuSection>
      <Featured></Featured>
    </div>
  );
};

export default Home;
