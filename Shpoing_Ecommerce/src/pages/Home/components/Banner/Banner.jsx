import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// image

import slide from "../../../../assets/Slide/Silder.png";
import slide2 from "../../../../assets/Slide/slider12.png";
import slide3 from "../../../../assets/Slide/slider13.png";
import SlideOne from "./Slideone/SlideOnes";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgeposition, setImageposition] = useState(-300);
  const [imgepositionH, setImagepositionH] = useState(-208);

  // Utility function to get the number of items per page based on screen size
  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1280) {
      // xl
    } else if (window.innerWidth >= 1024) {
      setImagepositionH(-150); // lg
    } else if (window.innerWidth >= 768) {
      setImageposition(-200); // md
    } else {
      // sm
    }
  };

  useEffect(() => {
    updateItemsPerPage(); // Set initial value based on screen size
    window.addEventListener("resize", updateItemsPerPage); // Update on resize
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // mous movement calculated

  const handleMouseMove = (e) => {
    const containerWidth = e.currentTarget.offsetWidth;
    const mouseX = e.clientX - e.currentTarget.offsetLeft;

    const containerhight = e.currentTarget.offsetHeight;
    const mouseY = e.clientY - e.currentTarget.offsetTop;

    console.log("containerhight", containerhight);
    console.log("mouseY", mouseY);

    if (mouseY < containerhight / 2) {
      setImagepositionH(-208 - (mouseY / containerhight) * 20);
    } else {
      setImagepositionH(
        -208 - ((containerhight - mouseY) / containerhight) * 20
      );
    }

    // Calculate if the mouse is in the left or right half of the container
    if (mouseX < containerWidth / 2) {
      setImageposition(-300 - (mouseX / containerWidth) * 20);
    } else {
      setImageposition(
        -300 - ((containerWidth - mouseX) / containerWidth) * 20
      );
    }
    setImagepositionH(
      Math.max(Math.min(newImagePositionH, 0), -containerHeight + 208)
    );
  };

  const items = [1, 2, 3, 4];
  return (
    <div className="flex  items-center ">
      <div className="text-gray-600 text-[14px] px-1 ml-[1%] mr-[0.8%]  space-y-5 relative xl:block hidden ">
        <RiFacebookFill className="inline-block" />
        <FaTwitter />
        <FaInstagram />
        <FaPinterest />
        <p className="uppercase absolute h-4 w-24  -rotate-90   top-[145px] left-[-39px]  ">
          FOLLOW us
        </p>
      </div>
      <div className=" ">
        <div className="w-[100%] border-solid border-2 border-[#F5E6E0] p-2">
          <div
            onMouseMove={handleMouseMove}
            className="w-[100%] overflow-hidden   relative"
          >
            <img className="w-full" src={slide} alt="" />
            <div className="absolute top-[30%] lg:left-20 md:left-5 ">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`${activeIndex === index ? "block" : "hidden"}`}
                >
                  {/* slide one  */}
                  {activeIndex === 0 && (
                    <SlideOne
                      imgeposition={imgeposition}
                      imgepositionH={imgepositionH}
                    >
                      sk
                    </SlideOne>
                  )}
                  {/* slide two  */}
                  {activeIndex === 1 && <div></div>}
                  {/* slide three */}
                  {activeIndex === 2 && <div></div>}
                </div>
              ))}
            </div>
            <div className="absolute bottom-11 left-11">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={` m-3  rounded-full transition   ${
                    activeIndex === index
                      ? "h-2 w-2 bg-black"
                      : "  h-1 w-1 bg-[#2222]"
                  }`}
                ></button>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
