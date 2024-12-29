import React from "react";
import SectionHeading from "../section heading/SectionHeading";

import featuredImage from "../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed   mb-20 text-white">
      <div className="bg-black bg-opacity-50">
        <div className="pt-[130px] mb-12 ">
          <SectionHeading
            subHeading={"Check It out"}
            heading={"Featured"}
          ></SectionHeading>
        </div>

        <div className="md:flex justify-center items-center  gap-16 px-48 pb-32">
          <div>
            {" "}
            <img className="" src={featuredImage} alt="" />
          </div>
          <div className="text-[#e2e1e1]">
            <h2>March 20, 2023</h2>
            <h3 className="uppercase">Where can i get some?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="mt-4 uppercase btn bg-transparent hover:bg-neutral border-t-0 border-x-0 border-b-4 border-b-white text-white bg-none hover:text-white hover:border-none">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
