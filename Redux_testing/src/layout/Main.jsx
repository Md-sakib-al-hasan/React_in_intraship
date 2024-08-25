import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { increment } from "../features/counters/countersSlice";

const Main = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  return (
    <div className="text-red-500">
      <p>{counters[0].value}</p>
      <button onClick={() => dispatch(increment(1))}>cliked</button>
      <p>
        <Outlet></Outlet>
      </p>
    </div>
  );
};

export default Main;
