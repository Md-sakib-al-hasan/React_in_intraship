// External imports (if any) should go here

// Asset imports
import handbags from "../../../../assets/Home/Top_Categories/handbag.png";
import colthings from "../../../../assets/Home/Top_Categories/clothes-hanger.png";
import jackets from "../../../../assets/Home/Top_Categories/Group.png";
import watches from "../../../../assets/Home/Top_Categories/Group-2.png";
import dress from "../../../../assets/Home/Top_Categories/Group-1.png";
import shoes from "../../../../assets/Home/Top_Categories/shoes.png";
import jeans from "../../../../assets/Home/Top_Categories/trousers.png";
import shirts from "../../../../assets/Home/Top_Categories/XMLID 1071.png";

// Component imports
import Item from "./Item/Item";
import Subtitle from "../../../../components/Subtitle/Subtitle";

// Style imports
import "./TopCategories.css";

const TopCategories = () => {
  const lists = [
    { name: "handbags", img: handbags },
    { name: "colthings", img: colthings },
    { name: "jackets", img: jackets },
    { name: "watches", img: watches },
    { name: "dresses", img: dress },
    { name: "shoes", img: shoes },
    { name: "jeans", img: jeans },
    { name: "shirts", img: shirts },
  ];

  return (
    <div className="sm:pb-[85px] pb-5 bg-[#eeeeee]">
      <Subtitle text="top categories" />
      <div className="flex justify-start xl:justify-center gap-[34px] sm:w-4/5 w-11/12 mx-auto overflow-scroll scrollbar-hide">
        {lists.map((list, id) => (
          <Item key={id} img={list.img} name={list.name} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
