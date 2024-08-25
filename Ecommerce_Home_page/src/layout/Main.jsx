import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="max-w-[1536px] m-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
