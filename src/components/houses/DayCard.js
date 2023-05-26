import { useRef, useState } from "react";
import DayModal from "./DayModal";

const DayCard = ({ house, day }) => {
  const dialogRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const timing = { duration: 150 };

  const handleOpen = () => {
    setVisible(true);
    const dialog = dialogRef.current;
    const fadeIn = [
      { opacity: 0 },
      { opacity: 1 },
    ];

    dialog.showModal();
    dialog.animate(fadeIn, timing);
  };

  const handleClose = () => {
    const dialog = dialogRef.current;
    const fadeOut = [
      { opacity: 1 },
      { opacity: 0 },
    ];
    
    dialog.animate(fadeOut, timing);
    setTimeout(() => {
      dialog.close();
      setVisible(false);
    }, timing.duration);
  }
  
  return (
    <>
      <DayModal house={ house } day={ day } onClick={ handleClose } 
                visible={ visible } ref={ dialogRef } />
      <button
        aria-label={ day.card.title }
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
              <p className={
                `bg-clip-text ${ day.card.label.twBackground }
                 ${ day.card.twBorder } m-0 p-0`
              }>
                { day.card.label.text }
              </p>
              {/* dipisah shadownya gr2 kalo digabung, shadownya jadi 
                  di atas textnya */}
              <span className={
                `absolute -z-20 inset-0 ${ day.card.label.twShadow } m-0 p-0`
              }>
                { day.card.label.text }
              </span>
            </div>
            <p className="z-0 flex justify-center m-0 p-0">
              <time dateTime={ day.card.date.datetime } className={
                `text-center text-2xl sm:text-3xl md:text-5xl text-white
                 first-line:[text-shadow:_0_4px_4px_rgba(0,0,0,0.25)]
                 -translate-y-5 first-line:${ day.card.date.twRotate }`
              }>
                { day.card.date.text }
              </time>
            </p>
          </div>
        </div>
      </button>
    </>
  );
};

export default DayCard;