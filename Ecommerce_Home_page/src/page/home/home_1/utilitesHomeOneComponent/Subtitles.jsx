const Subtitles = ({ firstpart, secondpart = " " }) => {
  return (
    <div>
      <h3 className="text-4xl text-center uppercase">
        <span className="font-normal ">{firstpart}</span>
        <span className="font-bold ml-3">{secondpart}</span>
      </h3>
    </div>
  );
};

export default Subtitles;
