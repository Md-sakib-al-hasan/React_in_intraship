import { RiFacebookFill } from "react-icons/ri";
import Logo from "../Logo/Logo";
import getway from "../../assets/Footer/getway.png";
import {
  FaChevronUp,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [showline, setShowline] = useState([
    { id: 0, value: false },
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
  ]);

  const company = ["About Us", "Careers", "Affiliates", "Blog", "Contact Us"];

  const handelonMouseOut = (id) => {
    setShowline((prevShowline) =>
      prevShowline.map((item) =>
        item.id === id ? { ...item, value: false } : item
      )
    );
  };

  const handelonMouseOver = (id) => {
    setShowline((prevShowline) =>
      prevShowline.map((item) =>
        item.id === id ? { ...item, value: true } : item
      )
    );
  };

  return (
    <div className="bg-[#E4E4E4]">
      <div className=" w-4/5 mx-auto gap-16 md:flex justify-around  pt-28 pb-20">
        <div className=" md:w-[27%] w-full ">
          <Logo></Logo>
          <div className=" text-sm mt-3 leading-6">
            <p>1418 River Drive, Suite 35 Cottonhall, CA 9622 </p>
            <p>United States</p>
            <p className="mt-11">sale@uomo.com</p>
            <p>+1 246-345-0695</p>
          </div>
          <div className="flex justify-between mt-7">
            <RiFacebookFill />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaPinterest />
          </div>
        </div>
        <div className="w-[38%] lg:flex hidden justify-center gap-12 text-sm">
          <div className=" ">
            <p className="uppercase text-lg font-medium">company</p>
            <div className="leading-10  mt-4">
              {company.map((item, id) => (
                <div
                  onMouseOver={handelonMouseOver}
                  onMouseOut={handelonMouseOut}
                >
                  <p key={id}>{item}</p>

                  <div
                    className={`w-[${
                      false ? "50%" : "0%"
                    }] rounded-3xl h-[1px] bg-black`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className=" ">
            <p className="uppercase text-lg font-medium">SHOP</p>
            <div className="leading-10  mt-4">
              <p>New Arrivals</p>
              <p>Accessories</p>
              <p>Men</p>
              <p>Women</p>
              <p>Shop All</p>
            </div>
          </div>
          <div className=" ">
            <p className="uppercase text-lg font-medium">HELP</p>
            <div className="leading-10  mt-4">
              <p>Customer Service</p>
              <p>My Account</p>
              <p>Find a Store</p>
              <p>Legal & Privacy</p>
              <p>Contact</p>
              <p>Gift Card</p>
            </div>
          </div>
        </div>
        <div className=" md:w-[32%] w-full md:mt-0 mt-10 ">
          <p className="uppercase font-medium text-baseb text-black ">
            subscribe
          </p>
          <p className="mt-6 text-sm leading-6 ">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="mt-3 bg-white flex justify-between ">
            <input
              style={{ padding: "16px" }}
              className="placeholder-gray-500 "
              type="text"
              placeholder="Your email address"
            />
            <button className="uppercase pr-4 leading-6 text-sm text-black ">
              Join
            </button>
          </div>
          <p className="font-medium text-sm mt-7 text-black">Secure payments</p>
          <div className="mt-2">
            <img src={getway} alt="getway" />
          </div>
        </div>
      </div>
      <hr className="bg-gray-500 h-[2px] w-4/5 mx-auto" />
      <div className="py-10 md:flex md:justify-between  w-4/5 mx-auto">
        <p>
          &#169; <span>2020 Uomo</span>
        </p>
        <div className="flex gap-7">
          <p className="md:flex  hidden">Language</p>
          <div className="md:flex hidden gap-5">
            <p>United kingdom</p>
            <div className="h-5 w-[2px] bg-black"></div>
            <p>English</p>
            <FaChevronUp />
            <p>Curency</p>
            <p>$USD</p>
            <FaChevronUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
