import { AiOutlineShopping } from "react-icons/ai";
import { CiHeart, CiUser } from "react-icons/ci";
import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RiFacebookFill, RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../../../Component/Logo";

const Navigtion = () => {
  const navigtionlist = (
    <>
      <li>
        <Link to="#">Home</Link>
      </li>
      <li>
        <Link to="#">Shop</Link>
      </li>
      <li>
        <Link to="#">Collection</Link>
      </li>
      <li>
        <Link to="#">journal</Link>
      </li>
      <li>
        <Link to="#">Lookbook</Link>
      </li>
      <li>
        <Link to="#">pages</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="bg-black">
        <div className=" lg:flex hidden  w-11/12 mx-auto  sm:justify-between justify-center  text-sm font-normal text-white  capitalize pt-3 pb-1 ">
          <ul className="flex gap-5  ">
            <li>
              <a href=""> Shipping </a>
            </li>
            <li>
              <a href=""> FAQ </a>
            </li>
            <li>
              <a href=""> Contact </a>
            </li>
            <li>
              <a href=""> Track order </a>
            </li>
          </ul>
          <p className="uppercase lg:flex hidden">free shpping worlDWDE</p>
          <ul className="sm:flex  gap-5 hidden">
            <li className="text-white flex items-center gap-4">
              <RiFacebookFill />
              <FaTwitter />
              <FaInstagram />
              <FaPinterest />
            </li>
            <li className="flex gap-1">
              <p>English</p>
              <IoIosArrowDown />
            </li>
            <li className="flex gap-1">
              <div>
                <span>$</span>
                <span className="uppercase">Usd</span>
              </div>
              <IoIosArrowDown />
            </li>
          </ul>
        </div>
      </div>
      {/* secondpart */}
      <div className="navbar m-0 p-0 w-11/12 mx-auto flex justify-between xl:bg-transparent xl:absolute left-16 bg-base-100  ">
        <div className="">
          <RiMenu2Fill className="lg:hidden" size={30} />
        </div>
        <div className="xl:navbar-start lg:mt-10 xl:mt-0  hidden lg:flex">
          <div className="relative ">
            <button className="border-solid border-[1px] border-gray-800 w-7 block rounded-xl absolute xl:top-1.5 lg:top-[-50px]"></button>
            <button className="border-solid border-[1px] border-gray-800 w-5 rounded-3xl m-0 p-0 xl:relative xl:top-0 absolute lg:top-[-43px]    "></button>
          </div>
          <ul className="  xl:ml-0 lg:ml-6 text-sm font-medium uppercase menu menu-horizontal px-1">
            {navigtionlist}
          </ul>
        </div>
        <div className="navbar-center lg:mt-6 xl:mt-0  ">{<Logo></Logo>}</div>
        <div className="lg:navbar-end  text-2xl font-bold  gap-7 md:flex ">
          <IoSearchSharp className="lg:flex hidden" />
          <CiUser className="lg:flex hidden" />
          <div className="relative lg:flex hidden">
            <CiHeart />
            <div className="absolute top-1/2 right-[-5px] bg-[#B9A16B] h-4 w-4 rounded-xl text-white text-xs text-center">
              3
            </div>
          </div>
          <div className="relative">
            <AiOutlineShopping className="text-3xl" />
            <div className="absolute top-1/2 right-[-5px] bg-[#B9A16B] h-4 w-4 rounded-xl text-white text-xs text-center">
              3
            </div>
          </div>
          {/* <RiMenu2Fill className="sm:hidden lg:flex" /> */}
        </div>
      </div>
    </>
  );
};

export default Navigtion;
