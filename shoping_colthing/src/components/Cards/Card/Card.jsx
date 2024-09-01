import React from "react";
import view from "../../../assets/Home/topColleciton/view 1.png";
import { CiHeart } from "react-icons/ci";

const Card = ({ singleData }) => {
  const {
    id,
    name,
    categories,
    price,
    favorites,
    image,
    discountedPrice,
    discountPercentage,
  } = singleData;

  return (
    <div className="card bg-base-100 sm:min-w-[213px] sm:max-h-[386px] xl:w-[280px] min-w-[45%]  m-2 rounded-none group ">
      <figure className="overflow-hidden relative">
        <img
          className="object-cover w-full max-h-[300px] hover:scale-110  duration-300  "
          src={image}
          alt="Shoes"
        />
        <button className=" absolute top-2 right-2  w-8 h-8 rounded-full bg-white hidden group-hover:block ">
          <img className="ml-2" src={view} alt="" />
        </button>
        <button className=" hover:text-white absolute top-12 right-2   w-8 h-8 rounded-full bg-white hover:bg-red-600 hidden group-hover:block  ">
          <CiHeart className="ml-2" />
        </button>
        <button className=" hover:text-red-700 absolute bottom-[5%] uppercase bg-white py-3 px-10 ml-[6%] hidden group-hover:block ">
          add to card
        </button>
      </figure>
      <div className="flex justify-between items-center">
        <div className="mt-4 mb-8">
          <p className=" capitalize text-sm text-[#767676] ">{categories}</p>
          <h2 className=" capitalize text-base text-[#222222] ">{name}</h2>
          <p className="text-[#222222] text-base  ">
            <span
              className={`${
                discountedPrice ? "line-through" : " "
              } text-gray-600 `}
            >
              <span className="text-[#222222]">${price}</span>
            </span>{" "}
            <span className={discountedPrice ? "text-[#D6001c]" : "hidden"}>
              ${discountedPrice}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
