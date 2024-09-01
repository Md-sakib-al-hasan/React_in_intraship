import floral_dress from "../../../../assets/Home/LookBook/woman_green1.png";
import trench from "../../../../assets/Home/LookBook/womanBlue.png";
import pant from "../../../../assets/Home/LookBook/pent.png";
import jacket from "../../../../assets/Home/LookBook/shirt.png";
import Subtitle from "../../../../components/Subtitle/Subtitle";
import LookBook from "./LookBook/LookBook";

const LookBooks = () => {
  const lists = [
    { categorie: "women seasons", title: "floral dress", img: floral_dress },
    { categorie: "women seasons ", title: "trench coat", img: trench },
    { categorie: "men seasons ", title: "folk pants", img: pant },
    { categorie: "men seasons ", title: "jacket", img: jacket },
  ];
  return (
    <div className="bg-[#eeeeee] sm:pb-32 pb-8 ">
      <div className="">
        <Subtitle text="Lookbook"></Subtitle>
        <div className=" flex  sm:w-4/5 w-11/12   mx-auto sm:gap-7 gap-3   sm:overflow-hidden sm:flex-nowrap flex-wrap justify-center ">
          {lists.map((item, id) => (
            <LookBook key={id} content={item}></LookBook>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LookBooks;
