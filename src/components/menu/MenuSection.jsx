import SectionHeading from "../section heading/SectionHeading";
import MenuItem from "./MenuItem";
import useMenu from "../Hooks/useMenu";

const MenuSection = () => {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionHeading
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionHeading>

      <div className="grid grid-cols-2 gap-12 mb-8">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
