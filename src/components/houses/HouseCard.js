import CardBg from "./img/card_bg.png";

const HouseCard = ({ house }) => {
  return (
    <section
      className={`${house.card.twBackground} relative flex aspect-[7/4] w-full
                  items-center rounded-[25px] py-[1.5rem]
                  ps-[2rem] font-['InsideOut'] text-white
                  drop-shadow-[10px_15px_10px_rgba(0,0,0,0.25)]
                  sm:py-10 sm:ps-11 md:py-14 md:ps-16`}
    >
      <img
        className="max-w-2/3 absolute right-0 top-0 h-5/6 select-none
                   rounded-[25px]"
        src={CardBg}
        alt="GTD logo as card background"
      />
      <section className="flex w-1/3 flex-col items-center gap-y-2 sm:gap-y-3">
        <h2 className="mb-0 text-2xl sm:text-3xl md:text-5xl">
          {house.card.label}
        </h2>
        <img
          className="aspect-square"
          src={house.card.image}
          alt={house.card.alt}
        />
      </section>
      <section className="flex grow flex-col items-center">
        <div className="invisible mb-2 text-2xl sm:mb-3 sm:text-3xl md:text-5xl">
          I{/* for spacing */}
        </div>
        <div
          className="flex h-[100px] flex-col justify-center sm:h-[150px]
                     md:h-[200px]"
        >
          <ol
            className="z-0 mb-0 max-h-[100px] overflow-scroll px-2
                       font-['Lato-Regular'] text-base font-semibold italic
                       sm:max-h-[150px] sm:text-xl md:max-h-[200px] md:text-2xl"
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
