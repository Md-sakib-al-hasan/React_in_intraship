import Small_device_Footer_item from "./Small_Device_Footer_item";

// imge 
import hanger from "../../../../assets/Footer/hanger 1.png";
import home from "../../../../assets/Footer/home 1.png";
import heart from "../../../../assets/Footer/heart.png";
import shoping from "../../../../assets/Footer/shoping_mobile.png"



const Small_device_Footer = () => {
    return (
       
<div className=" lg:hidden fixed bottom-0 bg-white  w-full mx-auto z-10 pt-3  ">
          <ul className="flex justify-center md:gap-40 gap-12 w-5/6 mx-auto    ">
        
            <Small_device_Footer_item
              src={home}
              name="Home"
            ></Small_device_Footer_item>
            <Small_device_Footer_item
              src={hanger}
              name="shop"
            ></Small_device_Footer_item>
            <Small_device_Footer_item
              src={heart}
              name="wishlist"
            ></Small_device_Footer_item>
            <div className="relative">
              <Small_device_Footer_item
                src={shoping}
                name="cart"
              ></Small_device_Footer_item>
              <div className="transform translate-x-1/2 w-4 h-4 rounded-full text-white bg-[#b9a16b] absolute top-2 right-1  flex items-center justify-center">
                <span className="text-sm">0</span>
              </div>
            </div>
          </ul>
        </div>

    );
};

export default Small_device_Footer;


