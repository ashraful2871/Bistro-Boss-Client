import React from "react";
import { Helmet } from "react-helmet-async";
import MenuCover from "./menu cover/MenuCover";
import MenuSection from "./menu/MenuSection";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <MenuCover></MenuCover>
      <MenuSection></MenuSection>
      <MenuCover></MenuCover>
      <MenuSection></MenuSection>
      <MenuCover></MenuCover>
      <MenuSection></MenuSection>
      <MenuCover></MenuCover>
      <MenuSection></MenuSection>
    </div>
  );
};

export default Menu;
