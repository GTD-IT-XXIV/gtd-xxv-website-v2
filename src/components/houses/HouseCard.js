import CardBg from "./img/card_bg.png";

const HouseCard = ({ house }) => {
  return (
    <section
      className={`${house.card.twBackground} relative flex min-w-[335px] 
                  justify-between gap-x-2 rounded-[25px] px-[2rem] py-[1.5rem]
                  drop-shadow-[10px_15px_10px_rgba(0,0,0,0.25)] sm:gap-x-6
                  sm:px-12 sm:py-10 md:h-[400px] md:w-[700px] md:gap-x-20
                  md:px-16 md:py-14`}
    >
      <img
        className="max-w-2/3 absolute right-0 top-0 h-5/6 rounded-[25px]"
        src={CardBg}
        alt="GTD logo as card background"
      />
      <section className="flex flex-col items-center">
        <h2 className="mb-2 text-2xl sm:mb-3 sm:text-3xl md:text-5xl">
          {house.card.label}
        </h2>
        <img
          className="-z-10 h-[100px] max-h-[200px] w-[100px] max-w-[200px]
                     sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px]"
          src={house.card.image}
          alt={house.card.alt}
        />
      </section>
      <ol
        className="z-0 mt-[40px] flex grow flex-col justify-center
                   font-['Lato-Regular'] text-base font-semibold italic
                   sm:mt-[50px] sm:text-xl  md:mt-[64px] md:text-2xl"
      >
        {house.card.details.map((entry, id) => (
          <li key={id}>{entry}</li>
        ))}
      </ol>
    </section>
  );
};

export default HouseCard;
