const LookBook = ({ content }) => {
  const { img, title, categorie } = content;
  return (
    <figure className="relative max-h-[430px] sm:min-w-[20%] min-w-full hover:scale-110 transition ease-in-out delay-150  ">
      <img
        className="object-cover object-top w-full sm:h-auto h-[250px] "
        src={img}
        alt="lookbookimge"
      />
      <div className="absolute  bottom-[6%] left-[6%]">
        <h3 className=" uppercase text-sm leading-6 text-white ">
          {categorie}
        </h3>
        <h3 className=" uppercase text-sm leading-6 text-white ">{title}</h3>
      </div>
    </figure>
  );
};

export default LookBook;
