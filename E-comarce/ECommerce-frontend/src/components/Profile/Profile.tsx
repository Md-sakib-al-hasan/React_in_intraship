// If you're using React Router for navigation

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { logout } from "../../features/Auth/AuthThunks/AuthThunks";


const Profile = () => {
    const dispatch:AppDispatch = useDispatch()
    const user = useSelector((state:RootState) => state.user.user)
    const showorhidden = useSelector((state:RootState) => state.user.showorhidden)


  return (
    <div className={` ${showorhidden.profile?"block":"hidden"} absolute right-[0%] top-[5%]  bg-white rounded-lg shadow-lg p-6 mt-8 z-50`}>
         <div >
         {
          user?.photoURL?<div className="flex justify-center pb-6"><img className="w-16 rounded-full " src={user?.photoURL} alt="image" /></div>: ""
        }
         </div>
      {user ? (
        <div>
          <div className="mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> {user?.name}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {user?.email}
            </p>
          </div>
          <button
            onClick={() => dispatch(logout())}
            className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-200"
          >
            Sign Out
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
