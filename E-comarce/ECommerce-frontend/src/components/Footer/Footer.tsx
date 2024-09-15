
import Big_divice_Footer from "./components/Big_divice_Footer/Big_divice_Footer";
import Small_device_Footer from "./components/Small_divice_Footer/Small_device_Footer";




const Footer = () => {
  
   return (
    <>
     {/* this is show lg to all_big devices  */}
     <Big_divice_Footer></Big_divice_Footer>
      {/* this is show md to all_small devices  */}
     <Small_device_Footer></Small_device_Footer>
    </>
   )
  
};

export default Footer;
