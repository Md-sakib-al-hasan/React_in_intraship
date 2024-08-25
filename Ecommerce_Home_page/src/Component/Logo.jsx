const Logo = ({ color = "white" }) => {
  return (
    <div className="flex items-center gap-1">
      <p className="font-bold text-4xl">
        <span className="relative">
          <span>
            <span>U</span>
            <div
              style={{ backgroundColor: color }}
              className=" w-1 h-2 absolute -rotate-45 top-3 right-[2px]  "
            ></div>
          </span>
          <div
            style={{ backgroundColor: color }}
            className=" w-1 h-9 top-2 right-[-18px] absolute -rotate-45"
          ></div>
        </span>
        <span>O</span>M
      </p>
      <div className="bg-[#C32929] h-6 w-6 rounded-full"></div>
    </div>
  );
};

export default Logo;
