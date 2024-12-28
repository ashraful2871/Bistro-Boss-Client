import React from "react";
import SectionHeading from "../section heading/SectionHeading";

import featuredImage from "../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-item  mb-20 text-white">
      <div className="pt-[130px] mb-12 ">
        <SectionHeading
          subHeading={"Check It out"}
          heading={"Featured"}
        ></SectionHeading>
      </div>

      <div className="md:flex justify-center items-center gap-16 pb-[130px] px-[300px]">
        <div>
          {" "}
          <img className="" src={featuredImage} alt="" />
        </div>
        <div>
          <h2>March 20, 2023March 20, 2023</h2>
          <h3 className="uppercase">Where can i get some?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            explicabo ad consectetur, ipsa fuga alias iusto velit facilis
            quaerat ex quisquam nihil, sit sequi molestias aliquid totam neque
            cum doloremque? Aspernatur veniam vitae assumenda eveniet autem, ex
            debitis libero accusantium sint eius nesciunt magni sapiente numquam
            aliquid ut omnis amet!
          </p>
          <button className="uppercase btn btn-outline">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
