import React from "react";
import { useGetData } from "../hooks/useGetdata";
import Card from "./Card";

const Cards = () => {
  const { data, setData } = useGetData("/public/HomeOne/trendryproducts.json");
  return (
    <div className="flex flex-wrap">
      {data.map((card) => (
        <Card singleData={card} key={card.id}></Card>
      ))}
    </div>
  );
};

export default Cards;
