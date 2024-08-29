import { IoSearchSharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

// image

import logo from "../../assets/NavBar/Logo.png";

const NavBar = () => {
  const navigtionlist = (
    <>
      <li className="relative">
        <Link className="uppercase link_effect " to="#">
          Home
        </Link>
      </li>
      <li className="relative">
        <Link className="uppercase  link_effect " to="#">
          Shop
        </Link>
      </li>
      <li className="relative">
        <Link className="uppercase link_effect" to="#">
          Collection
        </Link>
      </li>
      <li className="relative">
        <Link className="uppercase link_effect" to="#">
          journal
        </Link>
      </li>
      <li className="relative">
        <Link className="uppercase link_effect" to="#">
          Lookbook
        </Link>
      </li>
      <li className="relative">
        <Link className="uppercase link_effect" to="#">
          pages
        </Link>
      </li>
    </>
  );
  return (
    <>
      <nav className="xl:w-10/12 w-[98%] mx-auto lg:py-4 py-2">
        <div className="flex justify-between items-center w-[95%] lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navigtionlist}
            </ul>
          </div>
          <Link className="btn btn-ghost mr-5 text-xl">
            <img className="w-[120px]" src={logo} alt="logo" />
          </Link>
          <div className="relative">
            <AiOutlineShopping size={32} className="text-3xl mb-3" />
            <div className=" absolute top-1/3 right-[-5px] bg-[#B9A16B] h-4 w-4 rounded-xl text-white text-xs text-center">
              3
            </div>
          </div>
        </div>
        <div></div>

        <div className=" justify-between items-center lg:flex hidden ">
          <div className="flex justify-between items-center xl:space-x-10 space-x-7">
            <figure className="w-[150px]">
              <img className="w-full" src={logo} alt="Logo" />
            </figure>
            <ul className="flex xl:space-x-10 space-x-7">{navigtionlist}</ul>
          </div>
          <div className="flex items-center space-x-8">
            <IoSearchSharp size={28} className="" />
            <CiUser size={28} className="" />
            <div className="relative">
              <CiHeart size={28} />
              <div className=" absolute  top-1/3 right-[-5px] bg-[#B9A16B] h-4 w-4 rounded-xl text-white text-xs text-center">
                3
              </div>
            </div>
            <div className="relative">
              <AiOutlineShopping size={30} className="text-3xl mb-2" />
              <div className=" absolute top-1/3 right-[-5px] bg-[#B9A16B] h-4 w-4 rounded-xl text-white text-xs text-center">
                3
              </div>
            </div>
            <RiMenu2Fill size={28} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>;
