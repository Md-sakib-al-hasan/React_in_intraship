import { CiClock2 } from "react-icons/ci";
import { FaRegFolderClosed } from "react-icons/fa6";
import { TfiUser } from "react-icons/tfi";

const OurBlogsingle = ({ context }) => {
  const { user, catagorie, title, img, time } = context;
  return (
    <div className="sm:min-w-[32%] min-w-[50%] sm:ml-0 ml-[-10px]">
      <figure>
        <img
          className="object-cover w-full max-h-[300px]"
          src={img}
          alt="image"
        />
      </figure>
      <ul className="xl:flex flex flex-wrap mt-3 xl:gap-4 gap-2 text-sm text-[#929292]">
        <li className="flex gap-1 items-start">
          <TfiUser className="sm:block hidden" size={20} />
          <span className="pt-[2px]">{user}</span>
        </li>
        <li className="sm:flex gap-1 items-start hidden">
          <FaRegFolderClosed size={20} />
          <span className="pt-[2px]">{catagorie}</span>
        </li>
        <li className="flex gap-1 items-start">
          <CiClock2 className="sm:block hidden" size={20} />
          <span className="pt-[2px]">{time}</span>
        </li>
      </ul>
      <p className="text-[16px] mt-2 truncate">{title}</p>
    </div>
  );
};

export default OurBlogsingle;
