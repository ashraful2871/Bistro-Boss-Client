import React from "react";
import MenuItem from "../../menu/MenuItem";
import MenuCover from "../../menu cover/MenuCover";
import { Link } from "react-router-dom";
const MenuCategory = ({ items, img, title }) => {
  return (
    <div>
      {title && <MenuCover img={img} title={title}></MenuCover>}
      <div className="grid grid-cols-2 gap-12 my-16">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        {" "}
        <button className="mt-4 uppercase btn bg-transparent hover:bg-neutral border-t-0 border-x-0 border-b-4 border-b-neutral text-neutral font-bold bg-none hover:text-white hover:border-none">
          Read more
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
