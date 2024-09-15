import { Link } from "react-router-dom";

// image 
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logomobile from "../../../../../assets/Header/mobile/logomobile.png";
import menu_mbile from "../../../../../assets/Header/mobile/nav_icon mobile.png";
import shoping_mobile from "../../../../../assets/Header/mobile/shoping_mobile.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../app/store";
import { handelscrencontroler } from "../../../../../features/ScrenConroslicewhenOnClickHeaderMenu/screncontroSlice";
import { MdOutlineClear } from "react-icons/md";
import { FaRegUser, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaSquareInstagram } from "react-icons/fa6";
import { CgPexels } from "react-icons/cg";
import { useState } from "react";

const SmallDevices = () => {
  const isMenuOpen = useSelector((state:RootState) => state.onclickScreenControler)
  const dispatch:AppDispatch = useDispatch()
  const [ishiddenitemlanguage,setHiddenitemlanguage] = useState(false)
  const [ishiddenitemcountry,setHiddenitemcountry] = useState(false)


  const list_of_menu_mobile = ["Home", "shop", "About", "contact", "FaQ"];
    return (
       <nav>

        {/* show shadow */}
        <div
        onClick={() => dispatch(handelscrencontroler())}
        className={`lg:hidden absolute w-full opacity-85 z-20 bg-black h-dvh ${
          isMenuOpen ? "block" : "hidden"
        } `}
      ></div>
         
        {/* menu screen of onclicked */}
      <div
        className={` transform transition-all duration-700 lg:hidden overflow-scroll h-dvh z-50 absolute handlermenu mx-auto md:w-4/6 w-9/12 pl-4 pt-4 bg-white  ${
          isMenuOpen ? "block top-0 left-0" : "top-0 left-[-600px]"
        }`}
      >
        <ul className="flex justify-between items-center">
          <li className="flex">
            <button onClick={() => dispatch(handelscrencontroler())}>
              <MdOutlineClear size={25} />
            </button>
          </li>
          <li className="w-[38%]">
            <img className="w-full" src={logomobile} alt="" />
          </li>
          <li className="flex relative">
            <button >
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
                onClick={() => dispatch(handelscrencontroler())}
                className=" relative link_effect"
                to="#"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="bg-gray-200 w-full absolute bottom-44 h-[2px] mt-14 mb-7" />
        <ul className=" space-y-2 absolute bottom-4">
          <li className="flex gap-2  ">
            <FaRegUser className="block" />
            <p>My Account</p>
          </li>
          <li className="">
             <div className="flex items-center ">
             <span>Language</span>
             <button onClick={() => {setHiddenitemlanguage(prevent => !prevent),setHiddenitemcountry(false)}}><MdOutlineKeyboardArrowDown /></button>
             </div>
             <ul className={`text-[0.70rem] absolute top-1/3  right-[4%] ${ishiddenitemlanguage?"block":"hidden"}`}>
              <li>English</li>
              <li>Bangla</li>
              <li>Hindi</li>
              <li>Audi</li>
             </ul>
          </li>
          <li>
            
            <div  className="flex items-center ">
            <span>Country</span>
            <button onClick={() =>{ setHiddenitemcountry(prevent => !prevent), setHiddenitemlanguage(false)}}><MdOutlineKeyboardArrowDown /></button>
            </div>
            <ul  className={`text-[0.70rem] absolute top-1/3  right-[4%] ${ishiddenitemcountry?"block":"hidden"}`}>
              <li>USA</li>
              <li>Bangla</li>
              <li>Hindi</li>
              <li>Audi</li>
            </ul>
          </li>
          <li className="flex gap-[30%] pt-10 ">
            <Link to="#">
              <TiSocialFacebook size={25} />
            </Link>
            <Link to="#">
              <FaYoutube size={22} />
            </Link>
            <Link to="#">
              <FaTwitter size={22} />
            </Link>
            <Link to="#">
              <FaSquareInstagram size={22} />
            </Link>
            <Link to="#">
              <CgPexels size={25} />
            </Link>
          </li>
        </ul>
      </div>

         {/* main header  */}
         <div className="bg-white">
            <div className="lg:hidden  flex justify-between items-center w-[96%] mx-auto ">
        <button onClick={() => dispatch(handelscrencontroler())} >
          <img className="w-6 h-5" src={menu_mbile} alt="" />
        </button>
        <Link to="#">
          <img className="w-32" src={logomobile} alt="" />
        </Link>
        <div className="relative ">
          <button>
            <img className="w-5 mr-2" src={shoping_mobile} alt="shoping" />
          </button>
          <div className="transform translate-x-1/2 w-4 h-4 rounded-full text-white bg-[#b9a16b] absolute top-1/3   flex items-center justify-center">
            <span className="text-sm">0</span>
          </div>
        </div>
      </div>
        </div>
       </nav>
    );
};

export default SmallDevices;