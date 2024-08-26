import React from "react";

const Shop_now = ({ path = "#", linecoler = "black" }) => {
  return (
    <button className="uppercase text-sm font-medium">
      <a href={path}>
        <span>shop now</span>
        <span className={`h-[2px] w-[50%] bg-${linecoler} block`}></span>
      </a>
    </button>
  );
};

export default Shop_now;
