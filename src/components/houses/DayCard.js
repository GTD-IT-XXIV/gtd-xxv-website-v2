import { useEffect, useRef, useState, Fragment } from "react";
import DayModal from "./DayModal";
import overlay from "./img/overlay.svg";

const timing = { duration: 150 };

const Overlay = ({ src }) => {
  return (
    <>
      <img
        className="absolute z-10 w-full"
        src={src}
        alt="Card unavailable overlay"
      />
      <div
        className="absolute right-0 z-30 flex w-[62%] rotate-[-9.19deg]
                   items-center justify-center text-4xl text-white sm:text-6xl
                   md:text-7xl lg:text-8xl"
      >
        <p className="mb-0 [-webkit-text-stroke:_1px_#86371E]">Coming Soon</p>
        <span
          // Text shadow
          className="absolute inset-0 z-20 select-none
                     [text-shadow:_3px_3px_0_#86371E]"
        >
          Coming Soon
        </span>
      </div>
    </>
  );
};

const DayCard = ({ house, day }) => {
  const dialogRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [available, setAvailable] = useState(false);

  const handleOpen = () => {
    if (available) {
      const dialog = dialogRef.current;
      const fadeIn = [{ opacity: 0 }, { opacity: 1 }];

      setVisible(true);
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
    releaseDate.setUTCHours(releaseDate.getUTCHours() - 12);

    if (Date.now() >= releaseDate.valueOf()) setAvailable(true);
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
        className={`relative flex aspect-[760/267] w-full items-center
                    font-['InsideOut'] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
        onClick={handleOpen}
        disabled={!available}
      >
        {available || <Overlay className="z-10" src={overlay} />}
        <img
          className="absolute -z-30 w-full"
          src={day.card.background}
          alt="Card graphics and background"
        />
        <h2
          className={`mb-0 w-[38%] whitespace-nowrap text-center text-4xl
                    text-white [text-shadow:_0_4px_4px_rgb(0,0,0,40%)]
                      sm:text-6xl md:text-7xl lg:text-8xl ${day.card.twBorder}`}
        >
          {day.card.title}
        </h2>
        <div className="flex grow translate-y-2 flex-col gap-y-1">
          {day.card.label}
          <p className="z-0 mb-0 flex justify-center">
            <time
              dateTime={day.card.date.datetime}
              className={`-translate-y-5 text-center text-lg text-white
                          [text-shadow:_0_4px_4px_rgba(0,0,0,0.25)]
                          sm:text-3xl md:text-4xl lg:text-5xl
                          ${day.card.date.twRotate}`}
            >
              {day.card.date.text}
            </time>
          </p>
        </div>
      </button>
    </>
  );
};

export default DayCard;
