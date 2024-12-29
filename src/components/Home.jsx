import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category";
import MenuSection from "./menu/MenuSection";
import Featured from "./Featured/Featured";
import Testimonials from "./testimonial/Testimonials";
import BistroBoss from "./bistro boss/BistroBoss";
import CallUs from "./CallUs";
import ChefRecommended from "./ChefRecommended";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <BistroBoss></BistroBoss>
        <MenuSection></MenuSection>
        <CallUs></CallUs>
        <ChefRecommended></ChefRecommended>
        <Featured></Featured>
        <Testimonials></Testimonials>
        <Category></Category>
        <BistroBoss></BistroBoss>
        <MenuSection></MenuSection>
        <CallUs></CallUs>
        <ChefRecommended></ChefRecommended>
        <Featured></Featured>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
