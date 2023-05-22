import { useRef, useState } from "react";
import DayModal from "./DayModal";

const DayCard = ({ house, day }) => {
  const dialogRef = useRef(null);

  const handleOpen = () => {
    const dialog = dialogRef.current;
    dialog.showModal();
  };

  const handleClose = () => {
    const dialog = dialogRef.current;
    dialog.close();
  }
  
  return (
    <>
      <DayModal house={ house } day={ day } onClick={ handleClose } 
                ref={ dialogRef } />
      <button
        className="w-full sm:h-[160px] md:h-[254px] lg:h-[267px] flex grow
                  relative items-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        onClick={ handleOpen }
      >
        <img
          className="absolute -z-30"
          src={ day.card.background }
          alt="Card graphics and background"
        />
        <div className="
          flex grow relative items-center px-3 md:px-6 gap-x-6 md:gap-x-12
          font-['InsideOut']
        ">
          <h2 className={
            `w-[38%] text-white ${ day.card.twBorder }
            [text-shadow:_0_4px_4px_rgb(0,0,0,40%)] text-4xl sm:text-5xl
            md:text-8xl text-center`
          }>
            { day.card.title }
          </h2>
          <div className="w-[62%] flex flex-col translate-y-2">
            <div className={
              `relative -z-10 text-transparent text-4xl sm:text-5xl md:text-8xl
              text-center whitespace-nowrap ${ day.card.label.twRotate }`
            }>
              <span className={
                `bg-clip-text ${ day.card.label.twBackground }
                ${ day.card.twBorder }`
              }>
                { day.card.label.text }
              </span>
              {/* dipisah shadownya gr2 kalo digabung, shadownya jadi 
                  di atas textnya */}
              <span className={
                `absolute -z-20 inset-0 ${ day.card.label.twShadow }`
              }>
                { day.card.label.text }
              </span>
            </div>
            <div className="z-0 flex justify-center">
              <time dateTime={ day.card.date.datetime } className={
                `text-center text-2xl sm:text-3xl md:text-5xl text-white
                [text-shadow:_0_4px_4px_rgba(0,0,0,0.25)] -translate-y-5
                ${ day.card.date.twRotate }`
              }>
                { day.card.date.text }
              </time>
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

export default DayCard;