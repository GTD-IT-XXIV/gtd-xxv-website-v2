import HouseCard from "./HouseCard";
import DayCard from "./DayCard";
import days from "./days";

const House = ({ house }) => {
  return (
    <main
      className={`bg-gradient-to-b ${house.twColorStops[0]} ${house.twColorStops[1]}
                  via-[48.44%] ${house.twColorStops[2]} flex grow flex-col
                  items-center gap-y-8 overflow-hidden to-[97.4%] py-[2rem]
                  sm:gap-y-16 sm:py-16 md:gap-y-20 md:py-20`}
    >
      <div
        className="mx-[1.25rem] flex grow flex-col items-center gap-y-8 font-['InsideOut']
                   text-white sm:mx-10 sm:gap-y-10 md:mx-20"
      >
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl">{house.name}</h1>
        <HouseCard house={house} />
      </div>
      <div
        className="mx-5 flex grow flex-col items-center gap-y-4
                   sm:w-[470px] sm:gap-y-8 md:w-[745px] lg:w-[784px]"
      >
        {days.map((day, i) => (
          <DayCard key={i} house={house} day={day} />
        ))}
      </div>
    </main>
  );
};

export default House;
