import { useState, useEffect } from "react";
import { useGetData } from "../../../../hooks/useGetdata";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: items, setData: updateitems } = useGetData(
    "/public/HomeTwo/carousel.json"
  );

  // change auto slide

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className=" relative z-[-1]">
      {/* carousedl body */}
      <div className="carousel w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item w-full ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            {/* <img src={item.url} className="w-full" /> */}
            <div
              className="w-full py-80"
              style={{ backgroundColor: item.color }}
            ></div>
          </div>
        ))}
      </div>

      {/* carousel pointer */}
      <div className="absolute top-1/3 left-11">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={` h-2 w-2 m-4 block rounded-full transition   ${
              activeIndex === index ? "h-3 w-3 bg-black" : " bg-[#2222]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
