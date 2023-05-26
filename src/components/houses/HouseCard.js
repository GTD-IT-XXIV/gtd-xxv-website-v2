import CardBg from "./img/card_bg.png";

const HouseCard = ({ house }) => {
  return (
    <section className={
      `${house.card.twBackground} min-w-[335px] md:w-[700px] md:h-[400px]
       rounded-[25px] drop-shadow-[10px_15px_10px_rgba(0,0,0,0.25)] relative
       flex justify-between gap-x-2 sm:gap-x-6 md:gap-x-20 px-[2rem]
       py-[1.5rem] sm:px-12 sm:py-10 md:px-16 md:py-14`
    }>
      <img
        className="max-w-2/3 h-5/6 absolute top-0 right-0 rounded-[25px]"
        src={ CardBg }
        alt="GTD logo as card background"
      />
      <section className="flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl mb-2 sm:mb-3">
          { house.card.label }
        </h2>
        <img
          className="-z-10 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]
                     md:w-[200px] md:h-[200px] max-w-[200px] max-h-[200px]"
          src={ house.card.image }
          alt={ house.card.alt }
        />
      </section>
      <ol className="
        z-0 flex flex-col grow justify-center mt-[40px] sm:mt-[50px]
        md:mt-[64px] font-['Lato-Regular'] font-semibold italic text-base
        sm:text-xl md:text-2xl
      ">
        { house.card.details.map((entry, id) => 
          <li key={ id }>{ entry }</li>) }
      </ol>
    </section>
  )
};

export default HouseCard;