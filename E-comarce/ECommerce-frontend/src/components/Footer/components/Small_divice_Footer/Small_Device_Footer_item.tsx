import { Link } from "react-router-dom";

type smallDeviceFooterProps = {
    name: string,
    src: string,
}

const Small_device_Footer_item = ({ name, src }:smallDeviceFooterProps) => {
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

export default Small_device_Footer_item;