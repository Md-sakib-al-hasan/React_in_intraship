import image from "../../../../assets/Home_page_one/collection_sections/woman.jpg";
import Shop_now from "../../../../Component/Shop_now";
const Springcollections = () => {
  return (
    <div className="mx-auto">
      {/* first part of spring collctions */}
      <div className="bg-[#F5E6E0]">
        <div className="flex items-center w-4/5  justify-between  mx-auto">
          <div className="w-3/4 xl:mt-28 md:mt-14 ">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] bg-red-600 w-4 "></div>
              <p className="uppercase text-xs text-[#C32929]">
                DEAL OF THE WEEK
              </p>
            </div>
            <p className="uppercase xl:text-7xl md:text-4xl">
              <span className="font-bold">Spring </span>Collection
            </p>
            <button>
              <span className="uppercase text-xs">shop now</span>
              <div className="h-[2px] w-[70%] bg-black"></div>
            </button>
            {/* time controling */}
            <div className="mt-16 md:block hidden  ">
              <p className="xl:text-3xl md:text-2xl">
                <span>05</span> : <span>07</span> : <span>09</span> :{" "}
                <span>03</span>
              </p>
              <p className="xl:text-base md:text-xs  uppercase text-[#767676] space-x-4">
                <span>days</span> <span>hours</span> <span>mins</span>
                <span>sec</span>
              </p>
            </div>
          </div>
          <div className="md:w-1/4 w-full  bg-red-600">
            <img
              className="object-cover xl:h-[426px] md:h-[326px] w-full"
              src={image}
              alt="img"
            />
          </div>
        </div>
      </div>

      {/* second part of spring collctions */}

      <div className="md:flex block w-4/5  mx-auto mt-24 gap-6  ">
        <div className="md:w-1/2 flex items-end bg-[#D6001C] text-white">
          <div className=" w-5/12 font-medium pb-10 space-y-2 pl-5 ">
            <p className="text-lg">STARTING AT $19</p>
            <p className="text-2xl">{"Women’s T-Shirts"}</p>
            <Shop_now linecoler="white"></Shop_now>
          </div>
          <div className=" w-7/12">
            <img
              className="object-cover w-full h-[398px]"
              src={image}
              alt="img"
            />
          </div>
        </div>
        <div className="md:w-1/2 bg-[#e7e7e7] relative md:mt-0 mt-10 ">
          <div className="w-full">
            <img
              className="object-cover h-[398px] w-full"
              src={image}
              alt="img"
            />
          </div>
          <div className=" w-5/12 font-medium pb-10 space-y-2 pl-5 absolute  bottom-0 left-5 ">
            <p className="text-lg">STARTING AT $19</p>
            <p className="text-2xl">{"Men’s Sportswear"}</p>
            <Shop_now linecoler="white"></Shop_now>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Springcollections;
