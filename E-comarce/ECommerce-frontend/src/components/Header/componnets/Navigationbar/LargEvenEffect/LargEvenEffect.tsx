import { useState } from "react";
import { Link } from "react-router-dom";

interface propstypes {
  list: {
    item: string[];
    img: string;
  };
  setSlgscreenscroll: React.Dispatch<React.SetStateAction<boolean>>;
}

const Largeveneffect = ({ list, setSlgscreenscroll }:propstypes) => {
  const [activeitem, setActivitem] = useState<number |null>(null);
  const { item, img } = list;
  return (
    <div className="flex justify-around">
      <ul>
        {item.map((it, id) => (
          <li
            key={id}
            className={`uppercase text-xl font-medium leading-[55px] `}
          >
            <Link
              onClick={() => {
                setActivitem(id), setSlgscreenscroll((prevent) => !prevent);
              }}
              className={` ${
                activeitem === id ? "after:w-full" : "after:w-0"
              } relative after:content-[''] after:h-[2px] after:hover:w-full  after:transform after:transition-all after:duration-500 after:absolute after:bg-black after:bottom-0 after:left-0`}
              to="#"
            >
              {it}
            </Link>
          </li>
        ))}
      </ul>
      <figure className="w-[40%] mt-4 ]">
        <img className="object-contain w-full " src={img} alt="" />
      </figure>
    </div>
  );
};

export default Largeveneffect;
