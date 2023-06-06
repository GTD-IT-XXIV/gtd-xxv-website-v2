import { useEffect, useRef, useState, Fragment } from "react";
import DayModal from "./DayModal";
import overlay from "./img/overlay.svg";

const timing = { duration: 150 };

const DayCard = ({ house, day }) => {
  const dialogRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [available, setAvailable] = useState(false);

  const handleOpen = () => {
    if (available) {
      setVisible(true);
      const dialog = dialogRef.current;
      const fadeIn = [{ opacity: 0 }, { opacity: 1 }];

      dialog.showModal();
      dialog.animate(fadeIn, timing);
    }
  };

  const handleClose = () => {
    const dialog = dialogRef.current;
    const fadeOut = [{ opacity: 1 }, { opacity: 0 }];

    dialog.animate(fadeOut, timing);
    setTimeout(() => {
      dialog.close();
      setVisible(false);
    }, timing.duration);
  };

  useEffect(() => {
    let releaseDate = new Date(`${day.card.date.datetime}T00:00+08:00`);
    releaseDate.setUTCHours(releaseDate.getUTCHours() - 6);

    if (Date.now() >= releaseDate.valueOf()) {
      setAvailable(true);
    }
  }, [day]);

  return (
    <>
      <DayModal
        house={house}
        day={day}
        onClick={handleClose}
        visible={visible}
        ref={dialogRef}
      />
      <button
        aria-label={day.card.title}
        className={`relative flex aspect-[760/267] w-[360px] grow items-center
                    font-['InsideOut'] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                    sm:w-[520px] md:w-[760px]`}
        onClick={handleOpen}
      >
        <img
          className="absolute -z-30 w-full"
          src={day.card.background}
          alt="Card graphics and background"
        />
        {!available && (
          <>
            <img
              className="absolute -z-20 w-full"
              src={overlay}
              alt="Card unavailable overlay"
            />
            <div
              className="absolute right-0 z-20 flex w-[62%] rotate-[-9.19deg]
                         items-center justify-center text-4xl text-white
                         sm:text-5xl md:text-7xl"
            >
              <p className="m-0 p-0 [-webkit-text-stroke:_1px_#86371E]">
                Coming Soon
              </p>
              <span className="absolute inset-0 z-10 [text-shadow:_3px_3px_0_#86371E]">
                Coming Soon
              </span>
            </div>
          </>
        )}
        <div
          className={`${
            !available && "brightness-[30%]"
          } relative flex grow items-center`}
        >
          <h2
            className={`w-[38%] text-white ${day.card.twBorder} m-0
                        whitespace-nowrap p-0 px-4 text-center text-4xl
                        [text-shadow:_0_4px_4px_rgb(0,0,0,40%)]
                        sm:text-5xl md:text-7xl`}
          >
            {day.card.title}
          </h2>
          <div className="flex grow translate-y-2 flex-col gap-y-1 px-4">
            <div
              className={`relative -z-10 whitespace-nowrap text-center text-4xl
                          text-transparent sm:text-5xl md:text-7xl
                          ${day.card.label.twRotate}`}
            >
              <p
                className={`bg-clip-text ${day.card.label.twBackground}
                            ${day.card.twBorder} m-0 p-0`}
              >
                {day.card.label.text}
              </p>
              {/* dipisah shadownya gr2 kalo digabung, shadownya 
                  jadi di atas textnya */}
              <span
                className={`absolute inset-0 -z-20 ${day.card.label.twShadow}`}
              >
                {day.card.label.text}
              </span>
            </div>
            <p className="z-0 m-0 flex justify-center p-0">
              <time
                dateTime={day.card.date.datetime}
                className={`-translate-y-5 text-center text-lg text-white
                            first-line:[text-shadow:_0_4px_4px_rgba(0,0,0,0.25)]
                            sm:text-2xl md:text-4xl ${day.card.date.twRotate}`}
              >
                {day.card.date.text}
              </time>
            </p>
          </div>
        </div>
      </button>
    </>
  );
};

export default DayCard;
