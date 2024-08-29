import React from "react";
import { Link } from "react-router-dom";
import slide1 from "../../../../../assets/Slide/slider11.png";
import "./slideone.css";

const SlideOne = ({ imgeposition, imgepositionH }) => {
  console.log(imgeposition);
  return (
    <div className="">
      <div className="flex items-center space-x-2 pb-4">
        <div className="w-[50px] h-[2px] bg-red-500  summer_line "></div>
        <p className="uppercase text-red-600 text-sm summer-year">
          summer 2021
        </p>
      </div>
      <p className="xl:text-7xl md:text-5xl  leading-[70px] summer_sale">
        SUMMER SALE STYLISH{" "}
      </p>
      <p className="xl:text-7xl md:text-5xl font-bold leading-[70px] woman">
        WOMENS
      </p>
      <div className=" xl:w-[16.7%] md:w-[30%] relative mt-1 discovermore">
        <Link to="#" className="  text-sm uppercase  link_effect_half ">
          DISCOVER MORE{" "}
        </Link>
      </div>
      <div
        className={` $ w-[36%] absolute bottom-[-208px] right-[-320px]  transition-all duration-75 image_animation`}
        style={{ right: imgeposition, bottom: imgepositionH }}
      >
        <img className="w-full" src={slide1} alt="womanimage" />
      </div>
    </div>
  );
};

export default SlideOne;
