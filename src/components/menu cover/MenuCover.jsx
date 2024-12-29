import React from "react";
import "./menuCover.css";
import image from "../../assets/menu/banner3.jpg";
import { Parallax } from "react-parallax";
const MenuCover = () => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt="the menu  "
      strength={-200}
    >
      <div className="py-36  mb-20  ">
        <div className="text-center h-80 bg-black bg-opacity-50 w-[850px] mx-auto text-white  py-24">
          <div className="w-[600px] mx-auto ">
            {" "}
            <h2 className="uppercase text-5xl mb-2 font-bold">Our menu</h2>
            <p>would you like to tyr a dish?</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default MenuCover;
