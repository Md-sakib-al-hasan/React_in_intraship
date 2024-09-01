import { Link } from "react-router-dom";

const Mobile_navigation_Footer_item = ({ name, src }) => {
  return (
    <li>
      <Link to="#">
        <div className="flex flex-col items-center">
          <img className="block w-5" src={src} alt="icon" />{" "}
          <p className=" capitalize text-sm leading-8">{name}</p>
        </div>
      </Link>
    </li>
  );
};

export default Mobile_navigation_Footer_item;
