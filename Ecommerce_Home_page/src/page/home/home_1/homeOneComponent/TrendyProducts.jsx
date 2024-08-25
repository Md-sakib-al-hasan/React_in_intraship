import Cards from "../../../../Component/cards";
import Subtitles from "../utilitesHomeOneComponent/Subtitles";

const TrendyProducts = () => {
  return (
    <div>
      <Subtitles firstpart="our trendy" secondpart="products"></Subtitles>
      <ul className=" text-sm font-medium flex gap-x-6 justify-center items-center my-5">
        <li>
          <button className="uppercase ">all</button>
        </li>
        <li>
          <button className="uppercase border-solid border-b-2 border-black">
            newarrivals
          </button>
        </li>
        <li>
          <button className="uppercase">bestseller</button>
        </li>
        <li>
          <button className="uppercase">top</button>
        </li>
      </ul>
      <div className=" w-5/6 mx-auto">
        <Cards></Cards>
      </div>
      <div className="flex justify-center mt-10">
        <div>
          <button className=" uppercase font-medium">see all product </button>
          <div className="w-12  h-[2px] bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default TrendyProducts;
