import React from "react";

import cardImg from "../assets/home/card_imagge.png";

const ChefRecommendedCard = () => {
  return (
    <div className="">
      <div className="card bg-[#F3F3F3]">
        <figure>
          <img className="w-full h-72" src={cardImg} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="uppercase btn hover:bg-neutral bg-[#E8E8E8] border-b-4 border-b-[#BB8506] text-[#BB8506] hover:text-[#BB8506] hover:border-none">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommendedCard;
