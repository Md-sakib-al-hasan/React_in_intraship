import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="flex  items-center ">
      <div className="text-gray-600 text-[14px] px-1 space-y-5 relative ">
        <RiFacebookFill />
        <FaTwitter />
        <FaInstagram />
        <FaPinterest />
        <p className="uppercase absolute h-4 w-24  -rotate-90   top-[145px] left-[-39px]  ">
          FOLLOW us
        </p>
      </div>
      <div className=" ">
        <div className="w-[100%] border-solid border-2 border-[#F5E6E0] p-2">
          <div className="bg-[#F5E6E0] py-80 text-[#F5E6E0]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            minus ipsa dolore ratione quidem ab, error, dicta qui amet quaerat,
            non enim ex iusto tempora quos dolores illum. Blanditiis,
            recusandae.
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
