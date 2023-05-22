import HouseCard from "./HouseCard";
import DayCard from "./DayCard";

const House = ({ house }) => {
  return (
    <div
      className={ `bg-gradient-to-b ${ house.twColorStops[0] } 
                   ${ house.twColorStops[1] } via-[48.44%] 
                   ${ house.twColorStops[2] } to-[97.4%] flex flex-col grow 
                   overflow-scroll items-center gap-y-[2rem] sm:gap-y-16 md:gap-y-20 py-[2rem] 
                   sm:py-16 md:py-20` }
    >
      <div className="flex flex-col grow items-center mx-3 gap-y-8 sm:gap-y-10 
                      items-center font-['InsideOut'] text-white">
        <span className="text-4xl sm:text-5xl md:text-7xl mt-5">{ house.name }</span>
        <HouseCard house={ house } />
      </div>
      <div className="sm:w-[470px] md:w-[745px] lg:w-[784px] flex flex-col 
                      grow items-center gap-y-8 mx-3">
        { [1, 2, 3].map(day => <DayCard key={ day } house={ house } day={ day } />) }
      </div>
    </div>
  );
};

export default House;