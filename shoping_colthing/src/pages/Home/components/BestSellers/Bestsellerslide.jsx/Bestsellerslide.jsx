import React, { useRef, useState, useEffect } from "react";
import { useGetData } from "../../../../../hooks/UsegetData/UsegetData";
import Card from "../../../../../components/Cards/Card/Card";
import "./Bestsellerslide.css";

const Bestsellerslide = () => {
  const [activeindex, setActiveindex] = useState(0);
  const { data } = useGetData(
    "/public/Home/OurTopCollections/OurtopCollection.json"
  );
  const containerRef = useRef(null);

  const handleScroll = (index, length) => {
    const container = containerRef.current;
    const scrollAmount = (container.scrollWidth / length) * index + 1;
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const length = Math.max(0, data.length / 5);
    const intervalId = setInterval(() => {
      setActiveindex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % length;
        handleScroll(nextIndex, length);
        return nextIndex;
      });
    }, 5000); // 50000ms = 50 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [data]);

  const handleClick = (index, length) => {
    setActiveindex(index);
    handleScroll(index, length);
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="flex w-4/5 mx-auto justify-start overflow-scroll scrollbar-hide"
      >
        {data.map((card) => (
          <Card singleData={card} key={card.id}></Card>
        ))}
      </div>
      <div className="flex mt-4 gap-1 space-x-2 items-center justify-center pb-[10%]">
        {data
          .slice(0, Math.max(0, data.length / 5))
          .map((_, index, newarray) => (
            <div
              key={index}
              className={`rounded-full cursor-pointer ${
                activeindex === index
                  ? "h-3 w-3 bg-black"
                  : "h-[7px] w-[7px] bg-slate-300"
              }`}
              onClick={() => handleClick(index, newarray.length)}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Bestsellerslide;
