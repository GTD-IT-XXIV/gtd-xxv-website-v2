import CardBg from "./img/card_bg.png";

const HouseCard = ({ house }) => {
  return (
    <div
      className={ `${house.card.twBackground} min-w-[335px] md:w-[700px] md:h-[400px] 
                   rounded-[25px] drop-shadow-[10px_15px_10px_rgba(0,0,0,0.25)] 
                   relative flex justify-between gap-x-5 sm:gap-x-14 md:gap-x-20 
                   px-[2rem] py-[1.5rem] sm:px-12 sm:py-10 md:px-16 md:py-14` }
    >
      <img
        className="max-w-2/3 h-5/6 absolute top-0 right-0 rounded-[25px]"
        src={ CardBg }
      />
      <div className="flex flex-col items-center">
        <span className="text-2xl sm:text-3xl md:text-5xl mb-2 sm:mb-3">
          { house.card.label }
        </span>
        <img
          className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] 
                     md:h-[200px] max-w-[200px] max-h-[200px]"
          src={ house.card.image }
        />
      </div>
      <div className="flex flex-col grow justify-center mt-[40px] sm:mt-[50px] 
                      md:mt-[64px] font-['Lato-Regular'] font-semibold italic 
                      text-base sm:text-xl md:text-2xl">
        { house.card.details.map((entry, id) => <span key={ id }>{ entry }</span>) }
      </div>
    </div>
  )
};

export default HouseCard;