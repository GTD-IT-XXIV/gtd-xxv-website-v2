import React, { forwardRef } from "react";
const DayModal = forwardRef(({ house, day, visible, onClick }, ref) => {
  const twAlign = "w-full h-full flex items-center justify-center";

  return (
    <dialog
      ref={ref}
      aria-label={`${house.name} OG - ${day.card.title}`}
      className={`backdrop:bg-black/75 ${
        visible && twAlign
      } mx-auto bg-transparent`}
      onClick={onClick}
    >
      {visible && (
        <div
          className={`${day.popup.twBackground} flex aspect-[4/5] w-10/12 max-w-xs
                      flex-col items-center rounded-[25px] pb-[0.75rem]
                      font-['InsideOut'] text-white sm:w-9/12 sm:max-w-md sm:pb-5
                      md:max-w-lg lg:max-w-xl`}
          onClick={(e) => e.stopPropagation()}
        >
          <header
            className="flex w-full items-center justify-between rounded-t-[25px]
                     bg-[#190F3E] px-[0.75rem] py-2 sm:h-[52px] sm:px-[30px]"
          >
            <h3 className="my-0 ms-[0.5rem] text-base sm:ms-0 sm:text-xl md:text-2xl">
              {house.name} OG - {day.card.title}
            </h3>
            <button aria-label="Close" onClick={onClick}>
              <svg
                // x-mark icon from heroicons.com
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="me-[0.5rem] h-6 w-6 sm:me-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>
          {/* <iframe
            className="mx-[2rem] mb-[0.75rem] mt-[1rem] aspect-[4/3]
                       w-9/12 sm:mb-4 sm:mt-9"
            src={day.popup.video}
            title="YouTube video player"
            allowFullScreen
          /> */}
          <img
            src={day.popup.video}
            class="mx-[2rem] mb-[0.75rem] mt-[1rem] aspect-[4/3]
                w-9/12 sm:mb-4 sm:mt-9"
            alt="YouTube video player"
            allowFullScreen
          ></img>
          <div className="flex w-full grow items-center justify-center">
            {day.card.title !== "Day 4" && (
              <dl
                className="relative mb-0 flex w-full items-center justify-center
                         gap-6 sm:gap-12 lg:gap-16"
              >
                <div className="flex w-1/2 flex-col items-end ps-[0.5rem] md:ps-6">
                  <dt
                    className="mb-0 mt-[0.75rem] font-['Lato-Regular'] text-sm
                             font-normal sm:mt-6 sm:text-base md:text-lg"
                  >
                    location
                  </dt>
                  <dd className="mb-0 text-lg sm:text-2xl md:text-3xl">
                    {day.popup.location}
                  </dd>
                  <dt
                    className="mb-0 mt-[0.75rem] font-['Lato-Regular'] text-sm 
                font-normal sm:mt-6 sm:text-base md:text-lg"
                  >
                    time
                  </dt>
                  <dd className="mb-[0.75rem] sm:mb-6">
                    <time className="text-lg sm:text-2xl md:text-3xl">
                      {day.popup.time}
                    </time>
                  </dd>
                  <dt
                    className="mb-0 mt-[0.75rem] font-['Lato-Regular'] text-sm
                             font-normal sm:mt-6 sm:text-base md:text-lg"
                  >
                    dresscode
                  </dt>
                  <dd className="mb-0 text-lg sm:text-2xl md:text-3xl text-right">
                    {house.dresscode[day.card.title]}
                  </dd>
                </div>
                <div
                  className="absolute h-full rounded-sm border-2 border-solid 
                         border-white md:rounded-[2.5px] md:border-[2.5px]"
                />
                <div className="flex w-1/2 flex-col items-start pe-2 md:pe-6">
                  <dt
                    className="mb-0 mt-[0.75rem] font-['Lato-Regular'] text-sm
                             font-normal sm:mt-6 sm:text-base md:text-lg"
                  >
                    sub-OG allocation
                  </dt>
                  <dd className="mb-[0.75rem] sm:mb-6">
                    <a
                      className="text-lg text-stone-400 no-underline
                             hover:text-stone-400 sm:text-2xl md:text-3xl"
                      href={house.subOGLink[day.card.title]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click to open
                    </a>
                  </dd>
                  <dt
                    className="mb-0 mt-[0.75rem] font-['Lato-Regular'] text-sm
                             font-normal sm:mt-6 sm:text-base md:text-lg"
                  >
                    Game Flow
                  </dt>
                  <dd className="mb-[0.75rem] sm:mb-6">
                    <a
                      className="text-lg text-stone-400 no-underline
                             hover:text-stone-400 sm:text-2xl md:text-3xl"
                      href={house.gameFlow[day.card.title]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click to open
                    </a>
                  </dd>
                </div>
              </dl>
            )}
            {day.card.title === "Day 4" && (
              <dl
                className="relative mb-0 flex w-full items-center justify-center
                 gap-6 sm:gap-12 lg:gap-16"
              >
                <div className="flex w-1/2 flex-col items-end ps-[0.5rem] md:ps-6">
                  <dt
                    className="mb-0 mt-[0.75rem] font-['Lato-Regular'] text-sm
                     font-normal sm:mt-6 sm:text-base md:text-lg"
                  >
                    location
                  </dt>
                  <dd className="mb-0 text-lg sm:text-2xl md:text-3xl">
                    {day.popup.location}
                  </dd>
                  <dt
                    className="mb-0 mt-[0.75rem] font-['Lato-Regular'] text-sm 
        font-normal sm:mt-6 sm:text-base md:text-lg"
                  >
                    time
                  </dt>
                  <dd className="mb-[0.75rem] sm:mb-6">
                    <time className="text-lg sm:text-2xl md:text-3xl">
                      {day.popup.time}
                    </time>
                  </dd>
                </div>
                <div
                  className="absolute h-full rounded-sm border-2 border-solid 
                 border-white md:rounded-[2.5px] md:border-[2.5px]"
                />
                <div className="flex w-1/2 flex-col items-start pe-2 md:pe-6">
                  <dt
                    className="mb-0 mt-[0.75rem] font-['Lato-Regular'] text-sm
                     font-normal sm:mt-6 sm:text-base md:text-lg"
                  >
                    dresscode
                  </dt>
                  <dd className="mb-0 text-lg sm:text-2xl md:text-3xl">
                    {house.dresscode[day.card.title]}
                  </dd>
                </div>
              </dl>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
});

export default DayModal;
