import Cards from "../../../../components/Cards/Cards";
import Subtitle from "../../../../components/Subtitle/Subtitle";
import Bestsellerslide from "./Bestsellerslide.jsx/Bestsellerslide";

const Bestsellers = () => {
  return (
    <div>
      <Subtitle text="best sellers"></Subtitle>
      <div className="">
        <Bestsellerslide></Bestsellerslide>
      </div>
    </div>
  );
};

export default Bestsellers;
