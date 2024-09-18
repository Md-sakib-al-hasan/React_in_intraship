
import left from "../../../../assets/Home/Banner/leftarraw.png";
import right from "../../../../assets/Home/Banner/rightarrow.png";
import { useEffect, useState } from "react";
import "./Animation/animation.css";
import {  useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../app/store";
import { fetchBanners } from "../../../../features/HomeSlice/Components/BannerSlice/bannerSlice";
import Loadin from "../../../Loading/loading";
const Banner = () => {
  const [activeslide, setActiveslide] = useState(0);
  const [activearrowimge, setActivearrowimge] = useState(false);
  const [activearrowimge1, setActivearrowimge1] = useState(false);
  const dispatch:AppDispatch = useDispatch();
  const {banners:slides ,loading,error} = useSelector((state:RootState) => state.home.banner)


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        await dispatch(fetchBanners());
      } catch (error) {
        if (signal.aborted) {
          error = "fetching probnles"
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();  // Clean up: Abort fetch if the component unmounts
    };
  },[dispatch])

  useEffect(() => {
   const interval =   setInterval(() => {
        if(slides.length-1 === activeslide ){
            setActiveslide(0)
        }else{
           setActiveslide(prev => prev+1)
        }
       
      }, 20000);
    return () => clearInterval(interval)
  },[activeslide,slides.length])
 

  const handlearrowimgeover = () => {
    setActivearrowimge(true);
  };
  const handlearrowimgeout = () => {
    setActivearrowimge(false);
  };


  if(loading){
    return <Loadin></Loadin>
  }
  if(error){
     return <div className="text-5xl font-bold text-red-600  absolute top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%] ">someting is wrong</div>
  }

  return (
    <div>
      <div className=" overflow-hidden ">
        {slides.map((slide, index) => (
          <div
          style={{ maxHeight: `calc(100vh - 50px)` }}
            className={`min-w-full      relative ${
              activeslide == index ? "block" : "hidden"
            }`}
            key={index}
          >
            <div>
              <img
                className="object-cover lg:h-auto md:h-[500px] h-[230px] w-full"
                src={slide.img}
                alt="bannerimge"
              />
            </div>
            <div className="absolute  top-1/2 left-1/2 text-white sm:w-[35%] w-[60%] sm:leading-[70px] leading-6   transform translate-x-[-50%] translate-y-[-50%]">
              <h2 className="lg:text-6xl md:text-4xl text-center capitalize xl:leading-[80px] sm:leading-[77px] leading-[40px] text-2xl  ">
               <span className="font-grow"> {slide.title}</span>
              </h2>
              <div className="flex justify-center lg:gap-20 md:gap-10 gap-4">
                <p className="slide-left">Shop Woman</p>
                <p className="slide-right">Shop Men</p>
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
                className="hidden lg:block "
              >
                <img
                  className="md:hidden lg:block lg:w-6 md:w-4 absolute xl:top-[49.7%] lg:top-[51%] top-10 xl:left-[2.8%] lg:left-[4%] md:top-[51%] z-20"
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
                  className="md:hidden lg:block  absolute xl:top-[49.6%] lg:top-[51%] xl:right-[3.1%] lg:right-[4%] z-20"
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
            <div className="absolute bottom-2 left-1/2 flex gap-2 translate-x-[-50%] ">
             {slides.map((_,id) =>(              <button key={id}
                onClick={() => setActiveslide(id)}
                className={` ${
                  activeslide === id ? "h-3 w-3 " : "h-2 w-2"
                }  rounded-full bg-white`}
              ></button>) )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
