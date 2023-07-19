import HouseCard from "./HouseCard";
import DayCard from "./DayCard";
import days from "./days";

const House = ({ house }) => {
  return (
    <main
      className={`bg-gradient-to-b ${house.twColorStops[0]} bg-fixed
                  ${house.twColorStops[1]} via-[48.44%] ${house.twColorStops[2]}
                  flex grow flex-col items-center gap-y-14 overflow-hidden
                  to-[97.4%] pb-[8rem] pt-[4rem] sm:gap-y-24 sm:pb-48 sm:pt-24
                  md:gap-y-36 md:pb-64 md:pt-32`}
    >
      <div
        className="flex w-10/12 max-w-md flex-col items-center
                   gap-y-8 px-[0.5rem] font-['InsideOut'] text-white
                   sm:max-w-2xl sm:gap-y-10 sm:px-8 md:max-w-3xl lg:max-w-4xl"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          {house.name}
        </h1>
        <HouseCard house={house} />
      </div>
      <div
        className="flex w-10/12 max-w-md flex-col items-center gap-y-4
                   sm:max-w-2xl sm:gap-y-8 md:max-w-3xl lg:max-w-4xl"
      >
        {days.map((day, i) => (
          <DayCard key={i} house={house} day={day} />
        ))}
      </div>
    </main>
  );
};

export default House;
