import React, { useState } from "react";
import woman from "../../../../assets/Home/Collection/woman.png";
import men from "../../../../assets/Home/Collection/men.png";
import kids from "../../../../assets/Home/Collection/kids.png";
import { Link } from "react-router-dom";

const Callections = () => {
  return (
    <div className="lg:flex md:block w-5/6  gap-8  mx-auto mt-28">
      {/* woman collections  */}

      <div className="flex  items-end text-sm lg:w-1/2 md:w-full  relative bg-white overflow-hidden  group ">
        <div className=" absolute bottom-16 left-10  ">
          <p className="uppercase font-normal text-sm mb-2">hot list</p>
          <h2 className="md:text-[26px] text-lg font-medium space-x-1  ">
            <span className="uppercase  font-bold">Women</span>
            <span className="capitalize absolute"> collection </span>
          </h2>
          <button className="uppercase text-sm mt-4">
            <Link
              className={`relative after:content-[''] after:w-[60%] after:h-[2px] after:bg-black after:absolute after:bottom-[-4px] after:left-0 after:group-hover:w-full`}
              to="#"
            >
              shop now
            </Link>
          </button>
        </div>
        <div className=" absolute right-0   ">
          <img
            className=" md:h-[600px] h-[300px] object-cover w-full bg-white transform transition-all duration-200 group-hover:scale-105"
            src={woman}
            alt="Woman"
          />
        </div>
      </div>

      {/* Men and kids collections  */}

      <div className="lg:w-1/2 md:w-full  space-y-8">
        {/* Men collctons  */}
        <div className="flex justify-between items-end transform  group">
          <div className="2xl:w-1/4 xl:w-1/4 pl-10 pb-10 w-full  ">
            <p className="uppercase font-normal">hot list</p>
            <h2 className="md:text-2xl text-lg font-medium space-x-1 ">
              <span className="uppercase  font-bold">MEN</span>
              <span className="capitalize absolute"> collection </span>
            </h2>
            <button className="uppercase mt-2">
              <Link
                className={`relative after:content-[''] after:w-[60%] after:h-[2px] after:bg-black after:absolute after:bottom-[-4px] after:left-0 after:group-hover:w-full`}
                to="#"
              >
                shop now
              </Link>
            </button>
          </div>
          <div className="2xl:w-1/2 xl:w-3/4  h-[260px] ">
            <div className="w-full relative">
              <img
                className="object-cover w-[50%] absolute right-0 transition-all duration-700 group-hover:scale-110"
                src={men}
                alt="Woman"
              />
            </div>
          </div>
        </div>

        {/* Kids collctions  */}

        <div className="md:flex md:justify-between block   gap-x-8">
          <div className="">
            <div className="flex  items-end text-sm  ">
              <div className="2xl:w-5/12 lg:w-1/2 2xl:pl-10 pl-0 2xl:pb-16 lg:pb-10 w-full absolute ">
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
              <div className=" 2xl:w- lg:w-full  ">
                <img
                  className="object-cover w-full h-[380px]   bg-green-200"
                  src={kids}
                  alt="Woman"
                />
              </div>
            </div>
          </div>
          {/* E-GiFt cards */}
          <div className="bg-[#F5E6E0] flex items-center py-20  justify-center">
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
