import { GrDeliver } from "react-icons/gr";
import { useGetData } from "../../../../hooks/useGetdata";
import Subtitles from "../utilitesHomeOneComponent/Subtitles";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";

const Uomosection = () => {
  const { data, setData } = useGetData("/public/HomeOne/uomosections.json");
  console.log(data);
  return (
    <div>
      <Subtitles firstpart="@uomo"></Subtitles>
      {/* first_part */}
      <div className="flex gap-1 flex-wrap w-4/5 mx-auto mt-7">
        {data.map((url, id) => (
          <div className="lg:w-[16%] md:w-[24.5%]" key={id}>
            <img className="object-cover w-full h-full" src={url} alt="imge" />{" "}
          </div>
        ))}
      </div>
      {/* second part */}
      <div className=" md:flex md:space-y-0 space-y-5 w-4/5 mx-auto justify-around mt-24">
        <div className="flex flex-col justify-center items-center ">
          <GrDeliver className="mb-6" size={50} />
          <p className="uppercase font-medium lg:text-lg md:text-sm">
            FAST AND FREE DELIVERY
          </p>
          <p className=" font-normal  lg:text-base md:text-xs">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <RiCustomerService2Fill className="mb-6" size={50} />
          <p className="uppercase font-medium lg:text-lg md:text-sm ">
            24/7 CUSTOMER SUPPORT
          </p>
          <p className=" font-normal  lg:text-base md:text-xs">
            Friendly 24/7 customer support
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <SiAdguard className="mb-6" size={50} />
          <p className="uppercase font-mediumlg:text-lg md:text-sm">
            MONEY BACK GUARANTEE
          </p>
          <p className=" font-normal lg:text-base md:text-xs">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Uomosection;
