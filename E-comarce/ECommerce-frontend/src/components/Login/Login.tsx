
import { FaStarOfLife } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineClear } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux"
import {  useState } from "react";
import { signInWithEmailAndPasswordThunk, signInWithGithub, signInWithGoogle } from "../../features/Auth/AuthThunks/AuthThunks";
import { showOrHidden } from "../../features/Auth/AuthSlice/AuthSlice";


const Login = ({setLoginAndRegistercontroller}:{setLoginAndRegistercontroller:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const showorhidden = useSelector((state:RootState) => state.user.showorhidden)    
  const error = useSelector((state:RootState) => state.user.error)    
  const dispatch:AppDispatch = useDispatch();
      const [startController,SetStartController] = useState<{email:boolean,password:boolean}>({email:false,password:false});
       
      

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.value){
           const {name} = e.target;
            SetStartController(prevState => ({
               ...prevState,
                [name]: false
            }))
          
        }else{
          const {name} = e.target;
          SetStartController(prevState => ({
            ...prevState,
             [name]: true
         }))
        }

      }; 
            //create a account with google 

            const handlegoole = () => {
              dispatch(signInWithGoogle())
          }
          //create a account with github
    
          const handlegithub = () => {
              dispatch(signInWithGithub())
          } 
       

      const handelonSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email:FormDataEntryValue | null = form.get("email")
        const password:FormDataEntryValue | null = form.get("password")
        if (typeof email === 'string' && typeof password === 'string') {
          dispatch( signInWithEmailAndPasswordThunk({ email, password }));
          e.currentTarget.reset();
        }else{
          console.log("error")
        }
       
        

      }
    return (
        <div className={showorhidden.login?"block":"hidden"}>
            <div className="bg-black opacity-75 absolute top-0 left-0 z-40 w-full h-svh flex justify-center items-center ">
               
              
            </div>
            <div className=" w-full absolute top-1/2   left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 flex justify-center items-center">
            <div className={` ${true?"lg:w-[35%] md:w-[40%] ":"w-full hidden"} relative transform transition-all duration-500  px-9 py-10 bg-white rounded-md shadow-2xl space-y-[6%]`}>
               <button onClick={() =>(dispatch(showOrHidden(false)))}> <MdOutlineClear size={25} className="hover:text-red-500 absolute top-4 right-4" /></button>
                <h1 className="text-center font-medium text-xl uppercase leading-7 ">Login</h1> 
               <form onSubmit={handelonSubmit} className="flex flex-col space-y-[6%]  ">
                  {
                    error?<p className="text-sm text-red-500">invalid  email or password</p> : ""
                  }
                <div className="bg-green-300 w-full relative ">
                <input onChange={handleInputChange} className="w-full border-solid border-2 py-[2.5%] focus:outline-none placeholder:text-sm pl-[4%] " type="email" name="email" placeholder={`Username or Email `} />
                 <FaStarOfLife className={`${startController.email?"hidden":"block"} absolute top-1/2 translate-y-[-45%] text-red-600 left-36 `} size={8}></FaStarOfLife>
                </div>

                <div className="bg-green-300 w-full relative ">
                <input onChange={handleInputChange} className="w-full border-solid border-2 py-[2.5%] focus:outline-none placeholder:text-sm pl-[4%] " type="password" name="password" placeholder={`passwrod`} />
                 <FaStarOfLife className={` ${startController.password?"hidden":"block"} absolute top-1/2 translate-y-[-45%] text-red-600 left-[85px]`} size={8}></FaStarOfLife>
                </div>
                <span className="flex justify-between text-sm">
                 <span className="space-x-1" >
                 <input type="checkbox" name="" id="" />
                 <label htmlFor="">Remember me</label>
                 </span>
                 <Link className="underline hover:text-red-800" to="/reset_password">Lost your password?</Link>
                </span>
                <button className=" bg-black text-white text-lg uppercase py-[3%]">Log in</button>
               
               </form>
               <div className="flex justify-center flex-col items-center text-sm space-y-[6%] ">
                 <span>No account yet? <button onClick={()=> setLoginAndRegistercontroller(true)} className="underline hover:text-red-800">Create an account</button></span>
                 <span className="flex gap-[20%] ">
                 <button onClick={handlegoole}> <FcGoogle size={30} /></button>
                 <button onClick={handlegithub}><SiGithub size={30} /></button>
                 </span>
                </div>  
               </div>
            </div>
            
        </div>
    );
};

export default Login;