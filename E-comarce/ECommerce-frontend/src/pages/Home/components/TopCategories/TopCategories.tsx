

// Component imports
import Item from "./Item/Item";
import Subtitle from "../../../../components/Subtitle/Subtitle";

// Style imports
import "./TopCategories.css";
import { useRef, useState, MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../app/store";
import { fetchTobCallciton, svgobject } from "../../../../features/HomeSlice/Components/Top_Callections/top_CallecttionSlice";


const TopCategories = () => {


  const  defaultsvg: svgobject = {
    width: "800px",
    height: "800px",
    viewBox: "0 0 30 50",
    fill:"none",
    xmlns: "http://www.w3.org/2000/svg",
    
    paths: ["M76.8,230.4v230.4H256V230.4H76.8z M230.4,435.2h-128V256h128V435.2z", "M512,153.6v-51.209c0-2.756-0.444-5.487-1.314-8.098l-25.6-76.791C481.604,7.049,471.817,0,460.8,0H51.2 C40.183,0,30.396,7.049,26.914,17.502l-25.6,76.791C0.444,96.905,0,99.635,0,102.391V153.6c0,14.14,11.46,25.6,25.6,25.6v307.2 H12.8c-7.074,0-12.8,5.726-12.8,12.8c0,7.074,5.726,12.8,12.8,12.8h486.4c7.074,0,12.8-5.726,12.8-12.8 c0-7.074-5.726-12.8-12.8-12.8h-12.8V179.2C500.54,179.2,512,167.74,512,153.6z M460.8,25.6l21.333,64h-95.479l-16.282-64H460.8z M268.8,25.6h75.128l16,64H268.8V25.6z M268.8,115.2h94.72v38.4H268.8V115.2z M168.073,25.6H243.2v64h-91.128L168.073,25.6z M148.48,115.2h94.72v38.4h-94.72V115.2z M51.2,25.6h90.428l-16.282,64H29.867L51.2,25.6z M25.6,115.2h97.28v38.4H51.2H25.6V115.2 z M409.6,486.4H307.2V384h25.6v-25.6h-25.6V256h102.4V486.4z M460.8,486.4h-25.6v-256H281.6v256H51.2V179.2h409.6V486.4z M460.8,153.6h-71.68v-38.4h97.28v38.4H460.8z"
      
    ]
  }




  // UseRef to hold the scroll container reference, typed as HTMLDivElement or null
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const {loading,items,error} = useSelector((state:RootState) => state.home.topCalleciton)
  const dispatch:AppDispatch = useDispatch()




  useEffect (() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try{
        await dispatch(fetchTobCallciton())
      }
      catch(error){
          if (signal.aborted){
            error = "fecing problems"
          }
      }
    }
   fetchData()

   return () => {
     controller.abort();
   }

  },[dispatch])

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
        {items?.map((item,id) => (
          <Item key={id} icon={item.svg?item.svg: defaultsvg} loading={loading} error={error} name={item.name} />
        ))}
      </div>
      
    </div>
  );
};

export default TopCategories;
