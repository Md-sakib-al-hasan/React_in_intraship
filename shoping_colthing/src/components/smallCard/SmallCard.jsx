import React from "react";
import { CiHeart } from "react-icons/ci";

const Smallcard = ({ singleData }) => {
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
    <div className="card bg-base-100 sm:min-w-[213px] sm:max-h-[386px] xl:w-[280px] min-w-[45%]  m-2 rounded-none ">
      <figure className="overflow-hidden relative">
        <img
          className="object-cover w-full max-h-[300px] hover:scale-110  duration-300  "
          src={image}
          alt="Shoes"
        />
        {discountPercentage !== 0 && discountPercentage !== undefined ? (
          <div className="absolute top-[15%] py-1 px-2 bg-[#d6001c]">
            -{discountPercentage}%
          </div>
        ) : (
          ""
        )}
      </figure>
      <div className="flex justify-between items-center">
        <div className="mt-4 mb-8">
          <h2 className=" capitalize text-base  ">{name}</h2>
          <p className="text-white text-base  ">
            <span
              className={`${
                discountedPrice
                  ? "line-through text-gray-400  "
                  : " text-white "
              } text-gray-600 `}
            >
              <span className="">${price}</span>
            </span>{" "}
            <span className={discountedPrice ? "text-white ml-2" : "hidden"}>
              ${discountedPrice}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Smallcard;
