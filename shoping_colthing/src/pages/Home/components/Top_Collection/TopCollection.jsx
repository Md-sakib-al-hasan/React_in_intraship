import { useState } from "react";
import Subtitle from "../../../../components/Subtitle/Subtitle";
import Categoriesoftopcollection from "./Categoriesoftopcollection/Categoriesoftopcollection";
import Cardslide from "../../../../components/CardSildes/Cardsildes";

const TopCollection = () => {
  const [activeindex, setActiveindex] = useState(0);
  const lists = ["All", "Featured", "Popular", "Sale", "Best Rated"];

  return (
    <div className="">
      <Subtitle text="Our Top Collection" />
      <ul className="justify-center items-center flex gap-7 mb-10">
        {lists.map((list, id) => (
          <Categoriesoftopcollection
            text={list}
            key={id}
            activeindex={activeindex}
            setActiveindex={setActiveindex}
            index={id}
          />
        ))}
      </ul>

      <div className="relative mx-auto">
        {lists.map(
          (_, index) =>
            activeindex === index && (
              <div
                key={index}
                className="w-full h-full transition-opacity duration-500"
              >
                <Cardslide />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TopCollection;
