
import { FaStarOfLife } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineClear } from "react-icons/md";
import { SiGithub } from "react-icons/si";



const Register = ({setLoginAndRegistercontroller}:{setLoginAndRegistercontroller:React.Dispatch<React.SetStateAction<boolean>>}) => {

     const handelonSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
     }
    
    return (
        <div className={true?"block":"hidden"}>
            <div className="bg-black opacity-75 absolute top-0 left-0 z-40 w-full h-svh flex justify-center items-center ">
               
              
            </div>
            <div className=" w-full absolute top-1/2   left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 flex justify-center items-center">
            <div className={` ${true?"lg:w-[35%] md:w-[40%] ":"w-full hidden"} relative transform transition-all duration-500  px-9 py-10 bg-white rounded-md shadow-2xl space-y-[6%]`}>
                <MdOutlineClear size={25} className="hover:text-red-500 absolute top-4 right-4" />
                <h1 className="text-center font-medium text-xl uppercase leading-7 ">Register</h1> 
               <form onSubmit={ handelonSubmit} className="flex flex-col space-y-[6%]  ">
                <div className="bg-green-300 w-full relative ">
                <input className="w-full border-solid border-2 py-[2.5%] focus:outline-none placeholder:text-sm pl-[4%] " type="email" name="email" placeholder={`Username or Email `} />
                 <FaStarOfLife className="absolute top-1/2 translate-y-[-45%] text-red-600 left-36 " size={8}></FaStarOfLife>
                </div>

                <div className="bg-green-300 w-full relative ">
                <input className="w-full border-solid border-2 py-[2.5%] focus:outline-none placeholder:text-sm pl-[4%] " type="password" name="password" placeholder={`passwrod`} />
                 <FaStarOfLife className="absolute top-1/2 translate-y-[-45%] text-red-600 left-[85px]" size={8}></FaStarOfLife>
                </div>
                <span className="flex justify-between text-sm">
                 <span className="space-x-1" >
                 <input type="checkbox" name="" id="" />
                 <label htmlFor="">Remember me</label>
                 </span>
                 
                </span>
                <button className=" bg-black text-white text-md uppercase py-[3%] ">Register</button>
               </form>
               <div className="flex justify-center flex-col items-center text-sm space-y-[6%] ">
                 <span>Have an Account .<button onClick={() => setLoginAndRegistercontroller(true)} className="underline hover:text-red-800" >Login</button></span>
                 <span className="flex gap-[20%] ">
                 <button> <FcGoogle size={30} /></button>
                 <button><SiGithub size={30} /></button>
                 </span>
                </div>  
               </div>
            </div>
            
        </div>
    );
};

export default Register;