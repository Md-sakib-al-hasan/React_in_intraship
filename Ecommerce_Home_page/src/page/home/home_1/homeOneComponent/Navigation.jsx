import { IoSearchSharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import Logo from "../../../../Component/Logo";

const Navigation = () => {
  const navigtionlist = (
    <>
      <li>
        <button className=" border-solid border-black border-b-4">
          <a href="#">Home</a>
        </button>
      </li>
      <li>
        <button>
          <a href="#">Shop</a>
        </button>
      </li>
      <li>
        <button>
          <a href="#">Collection</a>
        </button>
      </li>
      <li>
        <button>
          <a href="#">journal</a>
        </button>
      </li>
      <li>
        <button>
          <a href="#">Lookbook</a>
        </button>
      </li>
      <li>
        <button>
          <a href="#">pages</a>
        </button>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar flex justify-between bg-base-100 sm:w-5/6  mx-auto w-100% ">
        <div className="">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn ms:0 ml-[-20px] btn-ghost lg:hidden"
            >
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
              className=" text-sm font-medium uppercase menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navigtionlist}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <a className="md:mr-7 mr-0" href="">
            {<Logo></Logo>}
          </a>
          <ul className=" text-sm font-medium uppercase flex gap-7">
            {navigtionlist}
          </ul>
        </div>
        <div className="sm:hidden">{<Logo></Logo>}</div>
        <div className="navbar-end text-xl font-bold  gap-7 md:flex hidden">
          <IoSearchSharp />
          <CiUser />
          <CiHeart />
          <div className="relative">
            <AiOutlineShopping />
            <div className="absolute top-1/2 right-[-5px] bg-[#B9A16B] h-4 w-4 rounded-xl text-white text-xs text-center">
              3
            </div>
          </div>
          <RiMenu2Fill className="sm:hidden lg:flex" />
        </div>
      </div>
    </>
  );
};

export default Navigation;
