import { useRef, useState } from "react";
import Subtitle from "../../../../components/Subtitle/Subtitle";
import { useGetData } from "../../../../hooks/UsegetData/UsegetData";
import Smallcard from "../../../../components/smallCard/SmallCard";

const Dealoftheweeek = () => {
  const [activeindex, setActiveindex] = useState(0);
  const { data } = useGetData(
    "/public/Home/OurTopCollections/OurtopCollection.json"
  );
  const containerRef = useRef(null);

  const handleScroll = (index, length) => {
    const container = containerRef.current;
    const scrollAmount = (container.scrollWidth / length) * index + 1;
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#222222] text-white">
      <Subtitle text="Deal of the week"></Subtitle>
      <div className="xl:flex w-4/5 mx-auto ">
        <div className="xl:w-[20%] w-full xl:mt-20 text-center ">
          <div className="text-3xl leading-10 xl:mb-[20%] mb-4 ">
            <p className="">Summer Sale</p>
            <p className="font-bold">Up to 60% off</p>
          </div>
          <buttton className="text-md leading-6">view all</buttton>
        </div>
        <div className="xl:w-[80%] w-full">
          <div
            ref={containerRef}
            className="flex w-full mx-auto justify-start overflow-scroll scrollbar-hide"
          >
            {data.map((card) => (
              <Smallcard singleData={card} key={card.id}></Smallcard>
            ))}
          </div>
          <div className="flex mt-4 gap-1 space-x-2 items-center justify-center pb-[10%]">
            {data
              .slice(0, Math.max(0, data.length / 5))
              .map((_, index, newarray) => (
                <div
                  key={index}
                  className={` rounded-full cursor-pointer  ${
                    activeindex == index
                      ? "h-3 w-3 bg-white "
                      : "h-[7px] w-[7px] bg-slate-300"
                  } `}
                  onClick={() => {
                    handleScroll(index, newarray.length), setActiveindex(index);
                  }}
                ></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dealoftheweeek;
