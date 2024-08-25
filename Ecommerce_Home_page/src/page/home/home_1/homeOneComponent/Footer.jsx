import { RiFacebookFill } from "react-icons/ri";
import Logo from "../../../../Component/Logo";
import {
  FaChevronUp,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import getway from "../../../../assets/Home_page_one/collection_sections/getway.png";

const Footer = () => {
  return (
    <div className="bg-[#E4E4E4]">
      <div className=" w-4/5 mx-auto gap-16 md:flex justify-around  pt-28 pb-20">
        <div className=" md:w-[32%] w-full ">
          <Logo></Logo>
          <div className=" text-sm mt-5">
            <p>1418 River Drive, Suite 35 Cottonhall, CA 9622 </p>
            <p>United States</p>
            <p className="mt-4">sale@uomo.com</p>
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
        <div className="w-[38%] lg:flex hidden gap-12">
          <div className=" ">
            <p className="uppercase text-lg font-medium">company</p>
            <div className="space-y-2 mt-5">
              <p>About Us</p>
              <p>Careers</p>
              <p>Affiliates</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className=" ">
            <p className="uppercase text-lg font-medium">SHOP</p>
            <div className="space-y-2 mt-5">
              <p>New Arrivals</p>
              <p>Accessories</p>
              <p>Men</p>
              <p>Women</p>
              <p>Shop All</p>
            </div>
          </div>
          <div className=" ">
            <p className="uppercase text-lg font-medium">HELP</p>
            <div className="space-y-2 mt-5">
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
          <p className="uppercase font-medium text-base ">subscribe</p>
          <p className="mt-5 ">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="mt-3 bg-white flex justify-between ">
            <input
              style={{ padding: "16px" }}
              className="placeholder-black "
              type="text"
              placeholder="Your email address"
            />
            <button className="uppercase pr-4 ">Join</button>
          </div>
          <p className="font-medium text-sm mt-7">Secure payments</p>
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
