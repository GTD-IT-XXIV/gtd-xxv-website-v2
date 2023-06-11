import CardBg from "./img/card_bg.png";

const HouseCard = ({ house }) => {
  return (
    <section
      className={`${house.card.twBackground} relative flex aspect-[7/4] 
                  min-w-[335px] max-w-[700px] items-center justify-start
                  gap-x-5 rounded-[25px] py-[1.5rem]
                  ps-[2rem] drop-shadow-[10px_15px_10px_rgba(0,0,0,0.25)]
                  sm:gap-x-10 sm:py-10 sm:ps-11 md:gap-x-20 md:py-14
                  md:ps-16`}
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
          className="-z-10 aspect-square w-[100px] sm:w-[150px] md:w-[200px]"
          src={house.card.image}
          alt={house.card.alt}
        />
      </section>
      <section className="flex flex-col">
        <div className="invisible mb-2 text-2xl sm:mb-3 sm:text-3xl md:text-5xl">
          I
        </div>
        <div className="flex h-[100px] flex-col justify-center sm:h-[150px] md:h-[200px]">
          <ol
            className="z-0 m-0 max-h-[100px] overflow-scroll pe-[2rem] ps-0
                       font-['Lato-Regular'] text-sm font-semibold italic
                       sm:max-h-[150px] sm:pe-11 sm:text-xl md:max-h-[200px]
                       md:pe-16 md:text-2xl"
          >
            {house.card.details.map((entry, id) => (
              <li key={id} className="me-2">
                {entry}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </section>
  );
};

export default HouseCard;
