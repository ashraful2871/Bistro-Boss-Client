import { useEffect, useState } from "react";
import SectionHeading from "../section heading/SectionHeading";
import MenuItem from "./MenuItem";

const MenuSection = () => {
  const [menu, setMenu] = useState();
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <div>
      <SectionHeading
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionHeading>

      <div className="grid grid-cols-2 gap-12 mb-8">
        {menu?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
