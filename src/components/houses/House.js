import HouseCard from "./HouseCard";
import DayCard from "./DayCard";
import days from "./days";

const House = ({ house }) => {
  return (
    <main className={
      `bg-gradient-to-b ${ house.twColorStops[0] } ${ house.twColorStops[1] } 
       via-[48.44%] ${ house.twColorStops[2] } to-[97.4%] flex flex-col grow 
       overflow-hidden items-center gap-y-[2rem] sm:gap-y-16 md:gap-y-20 
       py-[2rem] sm:py-16 md:py-20`
    }>
      <div className="
        flex flex-col grow mx-3 gap-y-8 sm:gap-y-10 items-center 
        font-['InsideOut'] text-white
      ">
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl">
          { house.name }
        </h1>
        <HouseCard house={ house } />
      </div>
      <div className="
        sm:w-[470px] md:w-[745px] lg:w-[784px] flex flex-col grow items-center
        gap-y-8 mx-3
      ">
        { days.map(day => 
          <DayCard key={ day } house={ house } day={ day } />) }
      </div>
    </main>
  );
};

export default House;