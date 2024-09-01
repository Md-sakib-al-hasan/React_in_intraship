import React from "react";
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
    <div className="card bg-base-100 xl:min-w-[18.6%] max-h-[386px] lg:min-w-[31.2%] md:min-w-[47%] min-w-[95%] xl:w-[280px] lg:w-[268px] md:w-[304px] m-2 rounded-none overflow-hidden group">
      <figure className="relative">
        <img
          className="object-cover w-full max-h-[300px] hover:scale-110 duration-300"
          src={image}
          alt="Shoes"
        />
        <button className="absolute bottom-[5%] uppercase bg-white py-3 px-10 ml-[6%] hidden group-hover:block">
          add to cart
        </button>
      </figure>
      <div className="absolute top-6">
        {discountPercentage && (
          <div className="bg-[#D6001c] text-white pt-4 pr-6 pb-2 pl-5">
            {`-${discountPercentage}%`}
          </div>
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-14 mb-8">
          <p className="capitalize text-sm text-[#767676]">{categories}</p>
          <h2 className="capitalize text-base text-[#222222]">{name}</h2>
          <p className="text-[#222222] text-base">
            <span
              className={`${
                discountedPrice ? "line-through" : ""
              } text-gray-600`}
            >
              <span className="text-[#222222]">${price}</span>
            </span>{" "}
            <span className={discountedPrice ? "text-[#D6001c]" : "hidden"}>
              ${discountedPrice}
            </span>
          </p>
        </div>
        <div>
          <CiHeart
            size={30}
            className={`${favorites ? "text-[#D6001C]" : "text-black"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
