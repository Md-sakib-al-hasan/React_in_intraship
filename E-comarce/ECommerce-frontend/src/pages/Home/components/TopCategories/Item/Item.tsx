import { ReactNode } from "react";

const Item = ({ icon, name }:{icon: ReactNode,name:string }) => {
  return (
    <div className="max-h-[158px]  transform transition-all duration-200 max-w-[120px] space-y-[15px] group">
      <figure className="relative">
        <div className="h-28 w-28 rounded-full bg-white"></div>
         <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-5xl text-gray-500 group-hover:text-black ">{icon}</span>
      </figure>
      <p className=" capitalize font-medium text-lg text-center  group-hover:text-red-500 ">{name}</p>
    </div>
  );
};

export default Item;
