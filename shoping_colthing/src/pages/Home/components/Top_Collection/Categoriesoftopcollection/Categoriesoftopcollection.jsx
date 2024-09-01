const Categoriesoftopcollection = ({
  text,
  activeindex,
  setActiveindex,
  index,
}) => {
  return (
    <li className=" capitalize  text-base font-medium ">
      <button
        onClick={() => setActiveindex(index)}
        className={`relative after:content-[''] after:h-[2px] after:bg-black after:absolute after:bottom-[-2px] after:left-0 ${
          activeindex === index ? "after:w-full" : "after:w-0"
        }`}
      >
        {" "}
        {text}{" "}
      </button>
    </li>
  );
};

export default Categoriesoftopcollection;
