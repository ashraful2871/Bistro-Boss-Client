import React from "react";
import SectionHeading from "./section heading/SectionHeading";
import ChefRecommendedCard from "./ChefRecommendedCard";

const ChefRecommended = () => {
  return (
    <div>
      <SectionHeading
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionHeading>
      <div className="mt-12 mb-32 grid grid-cols-3 gap-12 ">
        <ChefRecommendedCard></ChefRecommendedCard>
        <ChefRecommendedCard></ChefRecommendedCard>
        <ChefRecommendedCard></ChefRecommendedCard>
      </div>
    </div>
  );
};

export default ChefRecommended;
