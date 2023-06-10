import television from "../../../assets/img/home/television.svg";

const Television = ({ videoLink }) => {
  return (
    <div
      style={{ backgroundImage: `url(${television})` }}
      className="max-w-screen-md w-4/6 aspect-[calc(610/475)] bg-no-repeat bg-contain relative"
    >
      <div className="absolute left-[8%] top-[30%] w-4/6 h-3/5 bg-black rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`${videoLink}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Television;
