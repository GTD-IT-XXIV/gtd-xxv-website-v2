import HouseCard from "./HouseCard";
import DayCard from "./DayCard";
import days from "./days";

const House = ({ house }) => {
  return (
    <main
      className={`bg-gradient-to-b ${house.twColorStops[0]}
                  ${house.twColorStops[1]} via-[48.44%] ${house.twColorStops[2]}
                  flex grow flex-col items-center gap-y-8 overflow-hidden
                  to-[97.4%] py-[2rem] sm:gap-y-16 sm:py-16 md:gap-y-20
                  md:py-20`}
    >
      <div
        className="flex w-10/12 max-w-md grow flex-col items-center
                   gap-y-8 px-[0.5rem] font-['InsideOut'] text-white
                   sm:max-w-2xl sm:gap-y-10 sm:px-8 md:max-w-3xl"
      >
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl">{house.name}</h1>
        <HouseCard house={house} />
      </div>
      <div
        className="flex w-10/12 max-w-md flex-col items-center gap-y-4
                   sm:max-w-2xl sm:gap-y-8 md:max-w-3xl"
      >
        {days.map((day, i) => (
          <DayCard key={i} house={house} day={day} />
        ))}
      </div>
    </main>
  );
};

export default House;
