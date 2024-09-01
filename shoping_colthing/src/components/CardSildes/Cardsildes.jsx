import { useState, useEffect } from "react";
import { useGetData } from "../../hooks/UsegetData/UsegetData";
import Card from "../Cards/Card/Card";

import rightarrow from "../../assets/Home/topColleciton/Chevron Right 1.png";
import leftarraw from "../../assets/Home/topColleciton/Left.png";

const Cardslide = () => {
  const { data } = useGetData(
    "/public/Home/OurTopCollections/OurtopCollection.json"
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [itemsPerPagepix, setItemsPerPagepix] = useState(0);

  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1280) {
      setItemsPerPage(5); // xl
      setItemsPerPagepix(226);
    } else if (window.innerWidth >= 1024) {
      setItemsPerPage(4); // lg
      setItemsPerPagepix(226);
    } else if (window.innerWidth >= 768) {
      setItemsPerPage(3); // md
      setItemsPerPagepix(226);
    } else {
      setItemsPerPage(2); // sm
      setItemsPerPagepix(172);
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
        ? (data.length - itemsPerPage) * itemsPerPagepix
        : prevIndex - itemsPerPagepix
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      (data.length - itemsPerPage) * itemsPerPagepix - 1 >= prevIndex
        ? prevIndex + itemsPerPagepix
        : 0
    );
  };

  useEffect(() => {
    const intervalId = setInterval(slideRight, 5000); // Call slideRight every 5 seconds
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [itemsPerPagepix, data.length]); // Re-run the effect if these dependencies change

  return (
    <div className="relative overflow-hidden">
      <button
        onClick={slideLeft}
        className="absolute top-1/3 xl:left-[6%] md:left-10 sm:left-5 left-2 z-10 bg-[#eeeeee] w-11 h-11 rounded-full"
      >
        <figure className="relative">
          <img
            className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-30%]"
            src={leftarraw}
            alt=""
          />
        </figure>
      </button>
      <div className="overflow-hidden xl:w-4/5 md:w-[90%] w-[90%] mx-auto">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex}px)`,
          }}
        >
          {data.map((card) => (
            <Card singleData={card} key={card.id}></Card>
          ))}
        </div>
      </div>
      <button
        onClick={slideRight}
        className="absolute top-1/3 xl:right-[6%] md:right-10 sm:right-5 right-2 z-10 bg-[#eeeeee] w-11 h-11 rounded-full"
      >
        <figure className="relative">
          <img
            className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-30%]"
            src={rightarrow}
            alt=""
          />
        </figure>
      </button>
    </div>
  );
};

export default Cardslide;
