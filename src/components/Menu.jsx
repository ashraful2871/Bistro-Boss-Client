import React from "react";
import { Helmet } from "react-helmet-async";
import MenuCover from "./menu cover/MenuCover";
import useMenu from "./Hooks/useMenu";
import SectionHeading from "./section heading/SectionHeading";
import MenuCategory from "./Banner/menu category/MenuCategory";
import menuImg from "../assets/menu/banner3.jpg";
import dessert from "../assets/menu/dessert-bg.jpeg";
import pizza from "../assets/menu/pizza-bg.jpg";
import salad from "../assets/menu/salad-bg.jpg";
import soup from "../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu?.filter((item) => item.category === "dessert");
  const offered = menu?.filter((item) => item.category === "offered");
  const pizzas = menu?.filter((item) => item.category === "pizza");
  const salads = menu?.filter((item) => item.category === "salad");
  const soups = menu?.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main cover */}
      <MenuCover img={menuImg} title="Our Menu"></MenuCover>

      {/* offered menu */}
      <SectionHeading
        subHeading="Don't miss"
        heading="today's offer"
      ></SectionHeading>
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu item */}
      <MenuCategory
        img={dessert}
        items={desserts}
        title="dessert"
      ></MenuCategory>

      {/* pizza */}
      <MenuCategory img={pizza} items={pizzas} title="pizza"></MenuCategory>
      {/* salad */}
      <MenuCategory img={salad} items={salads} title="salad"></MenuCategory>
      {/* soup */}
      <MenuCategory img={soup} items={soups} title="soup"></MenuCategory>
    </div>
  );
};

export default Menu;
