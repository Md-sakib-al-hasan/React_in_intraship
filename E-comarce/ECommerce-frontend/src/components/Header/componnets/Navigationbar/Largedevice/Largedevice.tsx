import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../app/store";
import { handelscrencontroler } from "../../../../../features/ScrenConroslicewhenOnClickHeaderMenu/screncontroSlice";
import Largeveneffect from "../LargEvenEffect/LargEvenEffect";
import { useState } from "react";

//image 

import logo from "../../../../../assets/Header/logo.png";
import man from "../../../../../assets/Header/man.png";
import searching from "../../../../../assets/Header/searchbar.png";
import shoping from "../../../../../assets/Header/shopingbag.png";
import heart from "../../../../../assets/Header/heart.png";
import menu from "../../../../../assets/Header/nav_icon.png";
import kids from "../../../../../assets/Header/big-screen/Kids.jpg";
import woman from "../../../../../assets/Header/big-screen/woman.jpg";
import big_screen_man from "../../../../../assets/Header/big-screen/man.jpg";
import AddCard from "../AddCard/AddCard";
import { showOrHidden } from "../../../../../features/Auth/AuthSlice/AuthSlice";



const Largedevice = () => {
   const isMenuOpen = useSelector((state: RootState) => state.onclickScreenControler)
   const dispatch:AppDispatch = useDispatch();
   const [activeindex, setActiveindex] = useState(0)

   const list_of_menu = [
    {
      id: 1,
      section: "woman",
      item: [
        "accessories",
        "woman",
        "kids",
        "home",
        "collection",
        "sale up to 50% off",
        "jeans",
        "Dresses",
        "shoes",
        "join life",
      ],
      img: woman,
    },
    {
      id: 2,
      section: "Men",
      item: [
        "accessories",
        "Join life",
        "t-shirts & Tops",
        "gift card",
        "jackets & coats",
        "Best sellers",
        "collection",
        "sale up to 50% off",
        "#uomostyle",
      ],
      img: big_screen_man,
    },
    {
      id: 3,
      section: "Men",
      item: [
        "men",
        "women",
        "collection",
        "sale up to 50% off",
        "Accessories",
        "join life",
        "T-shirts & tops",
        "jeans",
        "best sellers",
        "dresses",
      ],
      img: kids,
    },
  ];
    return (
      <nav>
        <AddCard></AddCard>
        {/* shadow show  */}
        <div
      onClick={() => dispatch(handelscrencontroler())}
      className={` hidden h-dvh absolute z-10 w-full opacity-15 bg-black ${
        isMenuOpen ? " lg:block" : "hidden"
      }`}
    ></div>

        {/* menu screen after onclick  */}
      <div
        className={`bg-white lg:block hidden w-1/2 h-dvh absolute transform transition-all duration-200  ${
          isMenuOpen ? "left-0" : "left-[-5000px]"
        }`}
      style={{zIndex:60}} >
        <div className=" ">
          <div className="flex gap-8 font-medium text-base pl-16  bg-[#faf9f8] py-8">
            {list_of_menu.map((item, index) => (
              <button
                onClick={() => setActiveindex(index)}
                key={item.id}
                className={`uppercase  ${
                  activeindex === index
                    ? "bg-black text-white px-4 py-1 rounded-md"
                    : " "
                }`}
              >
                {item.section}
                
              </button>
            ))}
          </div>
          <div className="mt-10">
            {list_of_menu.map((item, index) => (
              <div
                key={index}
                className={activeindex === index ? "block" : "hidden"}
              >
                <Largeveneffect
                  setSlgscreenscroll={dispatch}
                  key={item.id}
                  list={item}
                ></Largeveneffect>
              </div>
            ))}
          </div>
        </div>
      </div>

         {/* main navbar  */}
        <div className="lg:flex z-30 lg:absolute left-[126px] top-5 justify-between items-center hidden w-[80%] mx-auto ">
        <ul className="flex gap-[4.0%] items-center ">
          <li className="w-[25%]">
            <Link className="" to="#">
              <img className="object-cover w-full" src={logo} alt="logo" />
            </Link>
          </li>
          <li className="">
            <button onClick={() => dispatch(handelscrencontroler())}>
              <img src={menu} alt="menu" />
            </button>
          </li>
        </ul>
        <ul className="flex gap-6">
          <li>
          <button >
              <img className="w-5" src={searching} alt="searchbar" />
            </button>
          </li>
          <li>
            <button onClick={() => dispatch(showOrHidden(true))}>
              <img src={man} alt="man" />
            </button>
          </li>
          <li className="relative">
            <Link to="#">
              <img src={heart} alt="heart" />
            </Link>
            <div className="transform translate-x-1/2 w-4 h-4 text-white rounded-full bg-[#b9a16b] absolute top-1/3 right-0 flex  items-center justify-center">
              <span className="">0</span>
            </div>
          </li>
          <li className="relative">
            <Link to="#">
              <img src={shoping} alt="shoping" />
            </Link>
            <div className="transform translate-x-1/2 w-4 h-4 rounded-full text-white bg-[#b9a16b] absolute top-1/3 right-0  flex items-center justify-center">
              <span className="">0</span>
            </div>
          </li>
        </ul>
      </div>
      </nav>
    );
};

export default Largedevice;