import React from "react";

const Singleservices = ({ context }) => {
  const { titel, description, img } = context;
  return (
    <div className="flex flex-col items-center min-w-[300px] group ">
      <figure className="pb-[16%]">{img}</figure>
      <p className=" group-hover:text-red-600 capitalize text-lg font-medium text-black ">
        {titel}
      </p>
      <p className=" font-[15px] text-[#767676] group-hover:text-red-600 ">
        {description}
      </p>
    </div>
  );
};

export default Singleservices;
