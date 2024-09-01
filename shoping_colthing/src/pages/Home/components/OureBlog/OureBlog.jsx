import React, { useEffect, useState } from "react";
import Subtitle from "../../../../components/Subtitle/Subtitle";
import OurBlogsingle from "./oureBlogsingle/OurBlogsingle";

// image

import womanharoni from "../../../../assets/Home/OureBlog/womanharmoni.jpg";
import womanbeauty from "../../../../assets/Home/OureBlog/womanbeautyu.jpg";
import womanexercise from "../../../../assets/Home/OureBlog/womanexercise.jpg";
import visitor from "../../../../assets/Home/OureBlog/visited.jpg";
import left from "../../../../assets/Home/topColleciton/Left.png";
import right from "../../../../assets/Home/topColleciton/Chevron Right 1.png";

const OureBlog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [itemsPerPagepix, setItemsPerPagepix] = useState(0);

  const lists = [
    {
      user: "By admin",
      catagorie: "Fashion",
      time: "March 9, 2021",
      title: "Beverly Hills weekend style diaries Ultimate Travel",
      img: womanharoni,
    },
    {
      user: "By admin",
      catagorie: "Fashion",
      time: "March 9, 2021",
      title: "The must have Neutral layers for Spring Ultimate",
      img: womanbeauty,
    },
    {
      user: "By admin",
      catagorie: "Fashion",
      time: "March 9, 2021",
      title: "5 Outdoor date ideas to try this fall Greek with family",
      img: womanexercise,
    },
    {
      user: "By admin",
      catagorie: "Fashion",
      time: "March 9, 2021",
      title: "Travel Guide: 8 Must-Do in UKA Ultimate Travel",
      img: visitor,
    },
  ];

  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1280) {
      setItemsPerPage(3); // xl
      setItemsPerPagepix(370);
    } else if (window.innerWidth >= 1024) {
      setItemsPerPage(3); // lg
      setItemsPerPagepix(270);
    } else if (window.innerWidth >= 768) {
      setItemsPerPage(3); // md
      setItemsPerPagepix(200);
    } else {
      setItemsPerPage(2); // sm
      setItemsPerPagepix(100);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0
        ? (lists.length - itemsPerPage) * itemsPerPagepix
        : prevIndex - itemsPerPagepix
    );
  };

  const slideRight = () => {
    console.log("print slideR");
    setCurrentIndex((prevIndex) =>
      (lists.length - itemsPerPage) * itemsPerPagepix - 1 >= prevIndex
        ? prevIndex + itemsPerPagepix
        : 0
    );
  };

  useEffect(() => {
    const intervalId = setInterval(slideRight, 5000); // Call slideRight every 5 seconds
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [itemsPerPagepix, lists.length]); // Re-run the effect if these dependencies change

  return (
    <div>
      <Subtitle text="Our Blog"></Subtitle>
      <div className="relative">
        <button
          onClick={slideLeft}
          className="absolute lg:top-[40%] md:top-[30%] top-[25%] xl:left-[7%] lg:left-[6%] md:left-[5%]"
        >
          <img className="sm:w-[30px] w-[20px]" src={left} alt="" />
        </button>
        <div className="w-4/5  overflow-hidden mx-auto">
          <div
            className={`flex   gap-4 transition-transform duration-200  `}
            style={{
              transform: `translateX(-${currentIndex}px)`,
            }}
          >
            {lists.map((item, id) => (
              <OurBlogsingle key={id} context={item}></OurBlogsingle>
            ))}
          </div>
        </div>
        <button
          onClick={slideRight}
          className="absolute lg:top-[40%] md:top-[30%] top-[25%] xl:right-[8%] lg:right-[6%] md:right-[5%] right-1"
        >
          <img className="sm:w-[30px] w-[20px]" src={right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default OureBlog;
