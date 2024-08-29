import React, { useState } from "react";
import imge from "./download.jpeg";

const PracticeComponent = () => {
  const [mouseY, setMouseY] = useState(0);

  // Handle mouse movement
  const handleMouseMove = (event) => {
    const containerHeight = event.currentTarget.clientHeight;
    const mouseYPosition =
      event.clientY - event.currentTarget.getBoundingClientRect().top;
    setMouseY(mouseYPosition);
  };

  return (
    <div
      className="relative h-[60vh] w-full bg-red-500 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <img
        src={imge}
        alt="logo"
        className="absolute"
        style={{
          bottom: `calc(${mouseY}px - 10%)`,
          right: "20%",
          transition: "bottom 0.1s ease-out",
        }}
      />
      l
    </div>
  );
};

export default PracticeComponent;
