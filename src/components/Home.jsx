import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category";
import MenuSection from "./menu/MenuSection";
import Featured from "./Featured/Featured";
import Testimonials from "./testimonial/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <MenuSection></MenuSection>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
