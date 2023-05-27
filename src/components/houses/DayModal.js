import { forwardRef } from "react";

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
          className={`${day.popup.twBackground} flex flex-col items-center
                      rounded-[25px] font-['InsideOut'] text-white
                      sm:h-[600px] sm:w-[480px]`}
          onClick={(e) => e.stopPropagation()}
        >
          <header
            className="flex w-full items-center justify-between rounded-t-[25px]
                     bg-[#190F3E] px-[0.75rem] py-2 text-base sm:h-[52px]
                       sm:px-[30px] sm:text-lg"
          >
            <h3 className="m-0 p-0 text-base sm:text-lg">
              {house.name} OG - {day.card.title}
            </h3>
            <button aria-label="Close" onClick={onClick}>
              {/* x-mark icon from heroicons.com */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>
          <iframe
            className="mx-[2rem] mb-[0.5rem] mt-[1rem] h-[185px] w-[230px]
                       sm:mb-4 sm:mt-9 sm:h-[246px] sm:w-[328px]"
            src={day.popup.video}
            title="YouTube video player"
            allowFullScreen
          />
          <dl
            className="relative mb-4 flex w-full items-center justify-center
                       gap-6 sm:gap-12"
          >
            <div className="ps-2s flex w-1/2 flex-col items-end md:ps-6">
              <dt
                className="mb-0 mt-[0.75rem] font-['Lato-Regular'] text-sm
                           font-normal sm:mt-6 sm:text-base"
              >
                location
              </dt>
              <dd className="m-0 p-0 text-lg sm:text-2xl">
                {day.popup.location}
              </dd>
              <dt
                className="mb-0 mt-[0.75rem] font-['Lato-Regular'] text-sm 
                           font-normal sm:mt-6 sm:text-base"
              >
                time
              </dt>
              <dd>
                <time className="mb-[0.75rem] text-lg sm:mb-6 sm:text-2xl">
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
                           font-normal sm:mt-6 sm:text-base"
              >
                dresscode
              </dt>
              <dd className="m-0 p-0 text-lg sm:text-2xl">
                {house.dresscode[day.card.title]}
              </dd>
              <dt
                className="mb-0 mt-[0.75rem] font-['Lato-Regular'] text-sm
                           font-normal sm:mt-6 sm:text-base"
              >
                sub-OG allocation
              </dt>
              <dd>
                <a
                  className="mb-[0.75rem] text-lg text-white no-underline
                             sm:mb-6 sm:text-2xl"
                  href={day.popup.subOGLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to open
                </a>
              </dd>
            </div>
          </dl>
        </div>
      )}
    </dialog>
  );
});

export default DayModal;
