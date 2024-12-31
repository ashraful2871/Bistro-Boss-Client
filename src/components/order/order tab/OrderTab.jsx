import React from "react";
import ChefRecommendedCard from "../../ChefRecommendedCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid  grid-cols-3 gap-12">
      {items?.map((item) => (
        <ChefRecommendedCard key={item._id} item={item}></ChefRecommendedCard>
      ))}
    </div>
  );
};

export default OrderTab;
