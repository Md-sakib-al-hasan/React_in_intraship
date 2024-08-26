import React, { useState } from "react";
import woman from "../../../../assets/Home/Collection/woman.jpg";

const Callections = () => {
  return (
    <div className="lg:flex md:block w-5/6  gap-8  mx-auto">
      {/* woman collections  */}

      <div className="flex  items-end text-sm lg:w-1/2 md:w-full  ">
        <div className="2xl:w-1/4 xl:w-2/8 pl-10 pb-20 w-full   ">
          <p className="uppercase font-normal">hot list</p>
          <h2 className="md:text-2xl text-lg font-medium space-x-1  ">
            <span className="uppercase  font-bold">Women</span>
            <span className="capitalize absolute"> collection </span>
          </h2>
          <button className="uppercase">
            <a href="#">shop now</a>
            <div className="h-[0.15rem] w-3/4 bg-[#222222] mt-[0.15rem] "></div>
          </button>
        </div>
        <div className="2xl:3/4 xl:w-6/8  ">
          <img
            className=" md:h-[600px] h-[300px] object-cover w-full bg-green-200"
            src={woman}
            alt="Woman"
          />
        </div>
      </div>

      {/* Men and kids collections  */}

      <div className="lg:w-1/2 md:w-full  space-y-8">
        {/* Men collctons  */}
        <div className="flex justify-between items-end ">
          <div className="2xl:w-1/4 xl:w-1/4 pl-10 pb-10 w-full  ">
            <p className="uppercase font-normal">hot list</p>
            <h2 className="md:text-2xl text-lg font-medium space-x-1 ">
              <span className="uppercase  font-bold">MEN</span>
              <span className="capitalize absolute"> collection </span>
            </h2>
            <button className="uppercase">
              <a href="#">shop now</a>
              <div className="h-[0.15rem] w-3/4 bg-[#222222] mt-[0.15rem] "></div>
            </button>
          </div>
          <div className="2xl:w-1/2 xl:w-3/4">
            <img
              className="object-cover w-full md:h-[400px] h-[285px]  hover:scale-110 bg-green-200"
              src={woman}
              alt="Woman"
            />
          </div>
        </div>

        {/* Kids collctions  */}

        <div className="md:flex md:justify-between block gap-x-8">
          <div className="">
            <div className="flex  items-end text-sm  ">
              <div className="2xl:w-5/12 lg:w-1/2 2xl:pl-10 pl-0 2xl:pb-16 lg:pb-10 w-full ">
                <p className="uppercase font-normal">hot list</p>
                <h2 className="md:text-2xl text-lg font-medium space-x-1   ">
                  <span className="uppercase  font-bold">Kids</span>
                  <span className="capitalize absolute "> collection </span>
                </h2>
                <button className="uppercase">
                  <a href="#">shop now</a>
                  <div className="h-[0.15rem] w-3/4 bg-[#222222] mt-[0.15rem] "></div>
                </button>
              </div>
              <div className=" 2xl:w-7/12 lg:w-1/2 ">
                <img
                  className="object-cover w-full h-[285px] bg-green-200"
                  src={woman}
                  alt="Woman"
                />
              </div>
            </div>
          </div>
          {/* E-GiFt cards */}
          <div className="bg-[#F5E6E0] flex items-center py-20 mt-10 justify-center">
            <div className="w-3/4">
              <h3 className="uppercase text-2xl font-bold mb-2">
                E-GiFT <span className="font-medium">cards</span>
              </h3>
              <p className="text-sm mb-4">
                Surprise someone with the gift they really want.
              </p>
              <button className="uppercase font-normal text-sm">
                <a href="#">DISCOVER MORE</a>
                <div className="h-[2px] w-3/4 bg-black mt-"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callections;
