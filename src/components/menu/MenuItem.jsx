import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-7">
      <img
        style={{ borderRadius: "0px 120px 120px 120px" }}
        className="w-[118px] h-[104px]"
        src={image}
        alt=""
      />
      <div>
        <h2 className="text-xl uppercase">{name} --------------------------</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-warning">${price}</p>
    </div>
  );
};

export default MenuItem;
