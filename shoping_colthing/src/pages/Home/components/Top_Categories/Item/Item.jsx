const Item = ({ img, name }) => {
  return (
    <div className="max-h-[158px] hover:text-red-500 transform transition-all duration-200 max-w-[120px] space-y-[15px]">
      <figure className="relative">
        <div className="h-28 w-28 rounded-full bg-white"></div>
        <img
          className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]"
          src={img}
          alt=""
        />
      </figure>
      <p className=" capitalize font-medium text-lg text-center  ">{name}</p>
    </div>
  );
};

export default Item;
