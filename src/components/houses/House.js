import HouseCard from "./HouseCard";

const House = ({ house }) => {
  return (
    <div
      className="flex flex-col grow items-center py-[80px]"
      style={{ background: house.background }}
    >
      <div className="flex flex-col grow items-center gap-y-[40px] items-center font-['InsideOut'] text-white text-7xl">
        <span className="mt-5">{ house.name }</span>
        <HouseCard house={ house } />
      </div>
      <div>

      </div>
    </div>
  );
};

export default House;