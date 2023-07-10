import television from "../../../assets/img/pre_events/television.svg";

const Television = ({ className, style, children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${television})`, ...style}}
      className={`${className} aspect-square bg-no-repeat bg-contain relative`}
    >
      <div className="absolute left-[5%] top-[20%] w-4/6 h-3/5 bg-black rounded-xl overflow-hidden">
        <div className="w-full h-full">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Television;
