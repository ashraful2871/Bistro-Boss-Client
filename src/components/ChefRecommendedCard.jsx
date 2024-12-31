import React from "react";

const ChefRecommendedCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="card bg-[#F3F3F3]">
        <figure>
          <img className="w-full h-72" src={image} alt="Shoes" />
        </figure>
        <p className="absolute bg-slate-900 text-white right-0 p-1 mr-4 mt-4">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
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
