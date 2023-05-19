import CardBg from "./img/card_bg.png";

const HouseCard = ({ house }) => {
  return (
    <div
      className="w-[700px] h-[400px] rounded-[25px] drop-shadow-[10px_15px_10px_rgba(0,0,0,0.25)] relative flex justify-between gap-x-20 px-[70px] py-[60px]"
      style={{ background: house.card.background }}
    >
      <img
        className="absolute top-0 right-0 rounded-[25px]"
        src={ CardBg }
      />
      <div className="flex flex-col items-center">
        <span className="text-5xl mb-3">{ house.card.label }</span>
        <img
          className="max-w-[200px] max-h-[200px]"
          src={ house.card.image }
        />
      </div>
      <div className="flex flex-col grow justify-center mt-[64px] font-sans text-3xl">
        { house.card.details.map(entry => <span>{ entry }</span>) }
      </div>
    </div>
  )
};

export default HouseCard;