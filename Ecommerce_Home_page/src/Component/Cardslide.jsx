import { useState, useEffect } from "react";
import { useGetData } from "../hooks/useGetdata";
import Card from "./Card";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const Cardslide = () => {
  const { data } = useGetData("/public/HomeOne/trendryproducts.json");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default to 4 items per page

  // Utility function to get the number of items per page based on screen size
  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1280) {
      setItemsPerPage(4); // xl
    } else if (window.innerWidth >= 1024) {
      setItemsPerPage(3); // lg
    } else if (window.innerWidth >= 768) {
      setItemsPerPage(2); // md
    } else {
      setItemsPerPage(1); // sm
    }
  };

  useEffect(() => {
    updateItemsPerPage(); // Set initial value based on screen size
    window.addEventListener("resize", updateItemsPerPage); // Update on resize
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.length - itemsPerPage
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - itemsPerPage ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative overflow-hidden">
      <button
        onClick={slideLeft}
        className="absolute top-1/2 xl:left-28 md:left-10 left-5 z-10"
      >
        <FaLessThan />
      </button>
      <div className="overflow-hidden w-4/5 mx-auto">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
          }}
        >
          {data.map((card) => (
            <Card singleData={card} key={card.id}></Card>
          ))}
        </div>
      </div>
      <button
        onClick={slideRight}
        className="absolute top-1/2 xl:right-28 md:right-10 right-5 z-10"
      >
        <FaGreaterThan />
      </button>
    </div>
  );
};

export default Cardslide;
