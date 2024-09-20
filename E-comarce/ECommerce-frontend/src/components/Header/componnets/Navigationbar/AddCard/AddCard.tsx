import { MdOutlineClear } from "react-icons/md";
import "./AddCard.css"
import demo from "../../../../../assets/Header/big-screen/Kids.jpg"


const AddCard = () => {
    return (
        <div style={{right:`${false?"0":"-1000px"}`}}  className="lg:w-[31%] overflow-hidden transition-all duration-200  sm:w-[45%] w-[80%]   min-h-svh z-40 bg-white absolute  flex flex-col justify-between">
            {/* part one  */}
            <div>
                         {/* sub part one  */}
            <div className="bg-[#faf9f8] ">
            <ul className="flex justify-between items-center py-[5%] w-10/12 mx-auto">
                <li className="uppercase font-medium text-base leading-5 ">Your CART</li>
                <li className="hover:text-red-600"><MdOutlineClear  size={21}/></li>
            </ul>
            </div>
            {/* sub part two  */}
             <ul  style={{ height: `calc(100vh - 320px)` }}  className="w-10/12 mx-auto space-y-4 mt-5  overflow-scroll scrollbar-hidden  ">
                <li className="flex justify-between">
                    <img src={demo} className="w-3/12" alt="" />
                    <div>
                      <p>Dresses Fully Boarded Gown</p>
                      <span>1 x $95.00</span>
                    </div>
                    <MdOutlineClear className="mt-[1.5%]" />
                </li>
                <li className="flex justify-between">
                    <img src={demo} className="w-3/12" alt="" />
                    <div>
                      <p>Dresses Fully Boarded Gown</p>
                      <span>1 x $95.00</span>
                    </div>
                    <MdOutlineClear className="mt-[1.5%]" />
                </li>
                <li className="flex justify-between">
                    <img src={demo} className="w-3/12" alt="" />
                    <div>
                      <p>Dresses Fully Boarded Gown</p>
                      <span>1 x $95.00</span>
                    </div>
                    <MdOutlineClear className="mt-[1.5%]" />
                </li>
                <li className="flex justify-between">
                    <img src={demo} className="w-3/12" alt="" />
                    <div>
                      <p>Dresses Fully Boarded Gown</p>
                      <span>1 x $95.00</span>
                    </div>
                    <MdOutlineClear className="mt-[1.5%]" />
                </li>
                <li className="flex justify-between">
                    <img src={demo} className="w-3/12" alt="" />
                    <div>
                      <p>Dresses Fully Boarded Gown</p>
                      <span>1 x $95.00</span>
                    </div>
                    <MdOutlineClear className="mt-[1.5%]" />
                </li>
             </ul>
            </div>
            {/* part two  */}
            <div className="w-10/12 mx-auto">
                <hr className="bg-slate-400 h-[1px] w-full" />
                <ul className="font-medium text-sm leading-6 flex justify-between items-center text-[#222222] py-5">
                    <li className="uppercase">subtotal:</li>
                    <li>$95.00</li>
                </ul>
                <button className="w-full lg:py-5 py-2 font-sm leading-6 bg-[#e4e4e4] mb-5 uppercase ">view cart</button>
                <button className="w-full  lg:py-5 py-2 font-sm leading-6 bg-[#222222] text-white mb-5 uppercase">checkout</button>

            </div>
        </div>
    );
};

export default AddCard;