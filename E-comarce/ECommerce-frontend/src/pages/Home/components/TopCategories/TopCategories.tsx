

// Component imports
import Item from "./Item/Item";
import Subtitle from "../../../../components/Subtitle/Subtitle";

// Style imports
import "./TopCategories.css";
import { useRef, useState, MouseEvent, ReactNode } from "react";
import { SlHandbag } from "react-icons/sl";
import { TbHanger, TbJacket, TbShoe } from "react-icons/tb";
import { PiDressLight, PiPantsLight, PiWatch } from "react-icons/pi";
import { IoShirtOutline } from "react-icons/io5";

// Defining the shape of each list item
interface ListItem {
  name: string;
  icon: ReactNode ;
}

const TopCategories = () => {
  const lists: ListItem[] = [
    { name: "handbags", icon: <SlHandbag /> },
    { name: "colthings", icon: <TbHanger /> },
    { name: "jackets", icon: <TbJacket /> },
    { name: "watches", icon: <PiWatch /> },
    { name: "dresses", icon: <PiDressLight /> },
    { name: "shoes", icon: <TbShoe /> },
    { name: "jeans", icon: <PiPantsLight /> },
    { name: "shirts", icon: <IoShirtOutline /> },
    { name: "shirts", icon: <IoShirtOutline />},
    { name: "shirts", icon: <IoShirtOutline /> },
    { name: "shirts", icon: <IoShirtOutline /> },
  ];

  // UseRef to hold the scroll container reference, typed as HTMLDivElement or null
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return; // Only move when dragging and if ref exists
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX; // Calculate movement distance
    scrollRef.current.scrollLeft = scrollLeft - walk; // Scroll based on drag
  };

  return (
    <div className="sm:pb-[85px] pb-5 bg-[#eeeeee]">
      <Subtitle text="top categories" />
      <div
        className="flex justify-start gap-[34px] sm:w-4/5 w-11/12 mx-auto overflow-scroll scrollbar-hide "
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {lists.map((list, id) => (
          <Item key={id} icon={list.icon} name={list.name} />
        ))}
      </div>
      
    </div>
  );
};

export default TopCategories;
