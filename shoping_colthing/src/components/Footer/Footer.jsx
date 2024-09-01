import { Link } from "react-router-dom";
import logo from "../../assets/Header/logo.png";

const Footer = () => {
  const company_list = [
    "About Us ",
    "Careers",
    "Affiliates",
    "Blog",
    "Contact us",
  ];
  const shop_list = ["New Arrivals", "Accessories", "Men", "Woman", "Shop All"];
  const helpList = [
    "Customer Service",
    "MY Account",
    "Find a Store",
    "Legal & Privacy",
    "Conteact",
    "Gift Card    ",
  ];
  return (
    <div className=" lg:block hidden bg-black text-white pt-32">
      <ul className="flex w-4/5 mx-auto gap-20 ">
        <li>
          <figure className="">
            <img className="w-[150px]" src={logo} alt="" />
          </figure>
          <p className="text-sm pt-8 ">
            1418 River Drive, Suite 35 Cottonhall, CA 9622
          </p>
          <p className="text-sm">United States</p>
          <p className="text-sm pt-8">sale@uomo.com</p>
          <p className="text-sm">+1 246-345-0695</p>
        </li>
        <li>
          <p className=" uppercase text-lg font-medium mb-7">Company</p>
          {company_list.map((item, id) => (
            <Link className="text-sm block leading-10" key={id}>
              {item}
            </Link>
          ))}
        </li>
        <li>
          <p className=" uppercase text-lg font-medium mb-7">Shop</p>
          {shop_list.map((item, id) => (
            <Link className="text-sm block leading-10" key={id}>
              {item}
            </Link>
          ))}
        </li>
        <li>
          <p className=" uppercase text-lg font-medium mb-7">Help</p>
          {helpList.map((item, id) => (
            <Link className="text-sm block leading-10" key={id}>
              {item}
            </Link>
          ))}
        </li>
        <li>
          <p className=" uppercase text-lg font-medium mb-7">OPENING TIME</p>
          <p className="text-sm leading-10">{"Mon – Fri: 8AM – 9PM"}</p>
          <p className="text-sm leading-10">Sat: 9 AM – 8 PM</p>
          <p className="text-sm leading-10">Sun: Closed</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
