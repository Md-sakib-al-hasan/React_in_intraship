import woman from "../../../../assets/Home/Banner/woman.jpg";
import man from "../../../../assets/Home/Banner/man.jpg";
import left from "../../../../assets/Home/Banner/leftarraw.png";
import right from "../../../../assets/Home/Banner/rightarrow.png";
import { useState } from "react";
import "./Animation/animation.css";
const Banner = () => {
  const [activeslide, setActiveslide] = useState(0);
  const [activearrowimge, setActivearrowimge] = useState(false);
  const [activearrowimge1, setActivearrowimge1] = useState(false);
  const slides = [
    { id: 0, title: "Betterthings in a better way ", img: woman },
    { id: 1, title: "Discover The latest trends", img: man },
  ];

  const handlearrowimgeover = () => {
    setActivearrowimge(true);
  };
  const handlearrowimgeout = () => {
    setActivearrowimge(false);
  };
  return (
    <div>
      <div className="  ">
        {slides.map((slide, index) => (
          <div
            className={`min-w-full  max-h-[700px]  bg-red-500  relative ${
              activeslide == index ? "block" : "hidden"
            }`}
            key={slide.id}
          >
            <figur>
              <img
                className="object-cover lg:h-auto md:h-[500px] h-[230px] w-full"
                src={slide.img}
                alt="bannerimge"
              />
            </figur>
            <div className="absolute  top-1/2 left-1/2 text-white sm:w-[35%] w-[60%] sm:leading-[70px] leading-6   transform translate-x-[-50%] translate-y-[-50%]">
              <h2 className="lg:text-6xl md:text-4xl text-center capitalize xl:leading-[80px] sm:leading-[77px] leading-[40px] text-2xl  ">
                {slide.title}
              </h2>
              <div className="flex justify-center lg:gap-20 md:gap-10 gap-4">
                <p className="">Shop Woman</p>
                <p>Shop Men</p>
              </div>
            </div>
            {/* left and right arrow designe */}
            <div className="">
              <button
                onMouseOver={handlearrowimgeover}
                onMouseOut={handlearrowimgeout}
                onClick={() =>
                  setActiveslide(index === 0 ? slides.length - 1 : index - 1)
                }
                className="hidden lg:block"
              >
                <img
                  className="md:hidden lg:block lg:w-6 md:w-4 absolute xl:top-1/2 lg:top-[51%] top-10 xl:left-12 lg:left-[4%] md:top-[51%] z-20"
                  src={left}
                  alt="bannerarrow"
                />
                <div className=" md:hidden lg:block absolute top-[47%] left-[2%]">
                  <div
                    className={`${
                      activearrowimge ? "hidden" : "block"
                    } w-16 h-16 rounded-full bg-black opacity-60`}
                  ></div>
                  <img
                    className={`${
                      activearrowimge ? "block" : "hidden"
                    } w-16  h-16 rounded-full`}
                    src={
                      slides[index === 0 ? slides.length - 1 : index - 1].img
                    }
                    alt="bannerimge"
                  />
                </div>
              </button>
              <button
                onMouseOver={() => setActivearrowimge1(true)}
                onMouseOut={() => setActivearrowimge1(false)}
                onClick={() =>
                  setActiveslide(index === slides.length - 1 ? 0 : index + 1)
                }
                className="hidden lg:block"
              >
                <img
                  className="md:hidden lg:block  absolute xl:top-1/2 lg:top-[51%] xl:right-12 lg:right-[4%] z-20"
                  src={right}
                  alt="bannerarrow"
                />
                <div className="absolute top-[47%] right-[2%]">
                  <div
                    className={`${
                      activearrowimge1 ? "hidden" : "block"
                    } w-16 h-16 rounded-full bg-black opacity-60`}
                  ></div>
                  <img
                    className={`${
                      activearrowimge1 ? "block" : "hidden"
                    } w-16   h-16 rounded-full`}
                    src={
                      slides[index === slides.length - 1 ? 0 : index + 1].img
                    }
                    alt="bannerimge"
                  />
                </div>
              </button>
            </div>
            {/* pointer design  */}
            <div>
              <button
                onClick={() => setActiveslide(1)}
                className={`${console.log(activeslide, index)} ${
                  activeslide === 1 ? "h-3 w-3 " : "h-2 w-2"
                } absolute xl:bottom-3 lg:bottom-10 md:bottom-20 bottom-4 left-[45%] md:left-[51%] rounded-full bg-white`}
              ></button>
              <button
                onClick={() => setActiveslide(0)}
                className={` ${
                  activeslide === 0 ? "h-3 w-3 " : "h-2 w-2"
                } absolute xl:bottom-3 lg:bottom-10 md:bottom-20 bottom-4 md:left-[49%]  left-[50%] rounded-full bg-white`}
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
