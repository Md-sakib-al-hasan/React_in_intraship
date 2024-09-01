import { Link } from "react-router-dom";
import Mobile_navigation_Footer_item from "./Mobile_navigat_footer/Mobile_navigation";
import { useContext, useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import { FaRegUser, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaSquareInstagram } from "react-icons/fa6";
import { CgPexels } from "react-icons/cg";
import { Allprovers } from "../../../Providers/Providers";
import Largeveneffect from "./LargEvenEffect/Largeveneffect";

// imge fetch
import logo from "../../../assets/Header/logo.png";
import man from "../../../assets/Header/man.png";
import searching from "../../../assets/Header/searchbar.png";
import shoping from "../../../assets/Header/shopingbag.png";
import heart from "../../../assets/Header/heart.png";
import menu from "../../../assets/Header/nav_icon.png";
//  mobile icon
import logomobile from "../../../assets/Header/mobile/logomobile.png";
import menu_mbile from "../../../assets/Header/mobile/nav_icon mobile.png";
import shoping_mobile from "../../../assets/Header/mobile/shoping_mobile.png";
import home from "../../../assets/Header/mobile/home 1.png";
import heart_mobile from "../../../assets/Header/mobile/heart.png";
import hanger from "../../../assets/Header/mobile/hanger 1.png";
import kids from "../../../assets/Header/big-screen/Kids.jpg";
import woman from "../../../assets/Header/big-screen/woman.jpg";
import big_screen_man from "../../../assets/Header/big-screen/man.jpg";

const Navigationbarr = () => {
  const { contromenu, setContromenu, lgscreenscroll, setSlgscreenscroll } =
    useContext(Allprovers);
  const [activeindex, setActiveindex] = useState(0);

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
      id: 1,
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
      id: 1,
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

  const list_of_menu_mobile = ["Home", "shop", "About", "contact", "FaQ"];

  return (
    <nav className=" relative  ">
      {/* handlemenu aftger onClick small to md */}
      {/* show shadow */}
      <div
        onClick={() => setContromenu((prevent) => !prevent)}
        className={`lg:hidden absolute z-10 w-full opacity-85 bg-black h-dvh ${
          contromenu ? "block" : "hidden"
        } `}
      ></div>
      {/* men screen of onclicked */}
      <div
        className={` transform transition-all duration-700 lg:hidden overflow-scroll h-dvh z-20 absolute handlermenu mx-auto md:w-4/6 w-9/12 pl-4 pt-4 bg-white  ${
          contromenu ? "block top-0 left-0" : "top-0 left-[-600px]"
        }`}
      >
        <ul className="flex justify-between items-center">
          <li className="flex">
            <button onClick={() => setContromenu((prevent) => !prevent)}>
              <MdOutlineClear size={25} />
            </button>
          </li>
          <li className="w-[38%]">
            <img className="w-full" src={logomobile} alt="" />
          </li>
          <li className="flex relative">
            <button to="#">
              <img className="w-5 mr-2" src={shoping_mobile} alt="shoping" />
            </button>
            <div className="transform translate-x-1/2 w-3 h-3 rounded-full text-white bg-[#b9a16b] absolute top-1/2 right-3   flex items-center justify-center">
              <span className="text-[10px]">0</span>
            </div>
          </li>
        </ul>
        <ul className="mt-2 w-2/12">
          {list_of_menu_mobile.map((item, id) => (
            <li key={id} className="uppercase text-md leading-[45px]  ">
              <Link
                onClick={() => setContromenu((prevent) => !prevent)}
                className=" relative link_effect"
                to="#"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="bg-gray-200 w-full h-[2px] mt-14 mb-7" />
        <ul className=" space-y-2">
          <li className="flex gap-2  ">
            <FaRegUser className="block" />
            <p>My Account</p>
          </li>
          <li>
            <span>Language</span>
            <select name="language" id="#">
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
              <option value="Hindi">Hindi</option>
              <option value="audi">Audi</option>
            </select>
          </li>
          <li>
            <span>Country</span>
            <select name="language" id="#">
              <option value="English">USA</option>
              <option value="Bangla">Bangla</option>
              <option value="Hindi">Hindi</option>
              <option value="audi">Audi</option>
            </select>
          </li>
          <li className="flex justify-between pb-10 w-10/12 pt-5">
            <Link to="#">
              <TiSocialFacebook />
            </Link>
            <Link to="#">
              <FaYoutube />
            </Link>
            <Link to="#">
              <FaTwitter />
            </Link>
            <Link to="#">
              <FaSquareInstagram />
            </Link>
            <Link>
              <CgPexels />
            </Link>
          </li>
        </ul>
      </div>

      {/* small to md screen  */}
      <div className=" ">
        <div className="lg:hidden flex justify-between items-center w-[96%] mx-auto ">
          <button onClick={() => setContromenu((prevent) => !prevent)}>
            <img className="w-6 h-5" src={menu_mbile} alt="" />
          </button>
          <Link to="#">
            <img className="w-32" src={logomobile} alt="" />
          </Link>
          <div className="relative ">
            <button to="#">
              <img className="w-5 mr-2" src={shoping_mobile} alt="shoping" />
            </button>
            <div className="transform translate-x-1/2 w-4 h-4 rounded-full text-white bg-[#b9a16b] absolute top-1/3   flex items-center justify-center">
              <span className="text-sm">0</span>
            </div>
          </div>
        </div>

        {/* mobile bottom navbar */}
        <div className=" lg:hidden fixed bottom-0 bg-white  w-full mx-auto z-50 pt-3  ">
          <ul className="flex justify-center md:gap-40 gap-12 w-5/6 mx-auto    ">
            <Mobile_navigation_Footer_item
              src={home}
              name="Home"
            ></Mobile_navigation_Footer_item>
            <Mobile_navigation_Footer_item
              src={hanger}
              name="shop"
            ></Mobile_navigation_Footer_item>
            <Mobile_navigation_Footer_item
              src={heart_mobile}
              name="wishlist"
            ></Mobile_navigation_Footer_item>
            <div className="relative">
              <Mobile_navigation_Footer_item
                src={shoping_mobile}
                name="cart"
              ></Mobile_navigation_Footer_item>
              <div className="transform translate-x-1/2 w-4 h-4 rounded-full text-white bg-[#b9a16b] absolute top-2 right-1  flex items-center justify-center">
                <span className="text-sm">0</span>
              </div>
            </div>
          </ul>
        </div>
      </div>
      {/* onclick for lg to big  */}
      {/* create shadow  */}
      <div
        onClick={() => setSlgscreenscroll((prevent) => !prevent)}
        className={` hidden h-dvh absolute z-10 w-full opacity-15 bg-black ${
          lgscreenscroll ? " lg:block" : "hidden"
        }`}
      ></div>
      {/* menu screen after onclick  */}
      <div
        className={`bg-white lg:block hidden w-1/2 h-dvh absolute transform transition-all duration-200 z-10 ${
          lgscreenscroll ? "left-0" : "left-[-5000px]"
        }`}
      >
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
                  setSlgscreenscroll={setSlgscreenscroll}
                  key={item.id}
                  list={item}
                ></Largeveneffect>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* lg to xxl screen */}
      <div className="lg:flex z-50 lg:absolute left-[126px] top-5 justify-between items-center hidden w-[80%] mx-auto ">
        <ul className="flex gap-[4.0%] items-center ">
          <li className="w-[25%]">
            <Link className="" to="#">
              <img className="object-cover w-full" src={logo} alt="logo" />
            </Link>
          </li>
          <li className="">
            <button onClick={() => setSlgscreenscroll((prevent) => !prevent)}>
              <img src={menu} alt="menu" />
            </button>
          </li>
        </ul>
        <ul className="flex gap-6">
          <li>
            <button to="#">
              <img className="w-5" src={searching} alt="searchbar" />
            </button>
          </li>
          <li>
            <Link to="#">
              <img src={man} alt="man" />
            </Link>
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

export default Navigationbarr;
