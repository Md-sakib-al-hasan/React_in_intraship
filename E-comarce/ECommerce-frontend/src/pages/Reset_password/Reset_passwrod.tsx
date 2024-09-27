import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";


const Reset_passwrod = () => {

    const [startController,SetStartController] = useState<boolean>(false);
      

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if(!e.target.value){
         SetStartController(false)
        
      }
      else
      {
        SetStartController(true)
      }
    }; 
    return (
        <div style={{height:"calc(100vh - 200px)"}} >
            <div className="bg-black py-9 w-full lg:block hidden">
            </div>
            <div  style={{height:"calc(100vh - 300px)"}} className="flex flex-col justify-center items-center sm:p-0 p-2">
            <div className="lg:w-[35%] md:w-[40%] space-y-[6%]  ">
                <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                <form  className="space-y-[6%]">
                <div className="bg-green-300 w-full relative ">
                <input onChange={handleInputChange} className="w-full border-solid border-2 py-[2.5%] focus:outline-none placeholder:text-sm pl-[4%] " type="email" name="email" placeholder={`Username or Email `} />
                 <FaStarOfLife className={`${startController?"hidden":"block"}absolute top-1/2 translate-y-[-45%] text-red-600 left-36`} size={8}></FaStarOfLife>
                </div>
                <button className=" w-full bg-black text-white text-md uppercase py-[3%] ">Reset passwrod</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Reset_passwrod;