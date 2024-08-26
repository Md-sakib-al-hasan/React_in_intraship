import React from "react";
import { useGetData } from "../../hooks/UsegetData/UsegetData";
import Card from "./Card/Card";

const Cards = () => {
  const { data, setData } = useGetData(
    "/public/TrendryProducts/TrendryProduct.json"
  );
  return (
    <div className="flex flex-wrap">
      {data.map((card) => (
        <Card singleData={card} key={card.id}></Card>
      ))}
    </div>
  );
};

export default Cards;
