import { forwardRef } from "react";
import CloseIcon from '@mui/icons-material/Close';

const DayModal = forwardRef(({ house, day, visible, onClick }, ref) => {
  return (
    <dialog 
      ref={ ref } align="center"
      aria-label={ `${ house.name } OG - ${ day.card.title }` }
      // gtw cara align center horizontally & vertically dialog
      // element
      className="backdrop:bg-black/75 mx-auto my-10 bg-transparent"
    >
      <div className={
        `${ day.popup.twBackground } sm:w-[480px] sm:h-[600px] rounded-[25px]
         flex flex-col items-center font-['InsideOut'] text-white`
      }>
        <header className="
          bg-[#190F3E] w-full sm:h-[52px] rounded-t-[25px] flex
          justify-between items-center px-[0.75rem] sm:px-[30px] py-2 
          text-base sm:text-lg
        ">
          <h3 className="m-0 p-0 text-base sm:text-lg">
            { house.name } OG - { day.card.title }
          </h3>
          <button aria-label="Close" onClick={ onClick }><CloseIcon /></button>
        </header>
        {/* video gk stop kalo popup/modal di-close */}
        <iframe 
          className="w-[230px] h-[185px] sm:w-[328px] sm:h-[246px] mx-[2rem]
                     mt-[1rem] sm:mt-9 mb-[0.5rem] sm:mb-4"
          src={ day.popup.video }
          title="YouTube video player"
          allowFullScreen
        />
        <dl className="
          w-full relative flex justify-center items-center gap-6 sm:gap-12 mb-4
        ">
          <div className="w-1/2 flex flex-col items-end ps-2s md:ps-6">
            <dt className="
              mt-[0.75rem] mb-0 sm:mt-6 text-sm sm:text-base
              font-['Lato-Regular'] font-normal
            ">
              location
            </dt>
            <dd className="m-0 p-0 text-lg sm:text-2xl">
              { day.popup.location }
            </dd>
            <dt className="
              mt-[0.75rem] mb-0 sm:mt-6 text-sm sm:text-base
              font-['Lato-Regular'] font-normal
            ">
              time
            </dt>
            <dd><time className="mb-[0.75rem] sm:mb-6 text-lg sm:text-2xl">
                { day.popup.time }
            </time></dd>
          </div>
          <div className="
            h-full absolute border-2 md:border-[2.5px] border-solid 
            border-white rounded-sm md:rounded-[2.5px]
          " />
          <div className="w-1/2 flex flex-col items-start pe-2 md:pe-6">
            <dt className="
              mt-[0.75rem] mb-0 sm:mt-6 text-sm sm:text-base
              font-['Lato-Regular'] font-normal
            ">
              dresscode
            </dt>
            <dd className="m-0 p-0 text-lg sm:text-2xl">
              { house.dresscode[day.card.title] }
            </dd>
            <dt className="
              mt-[0.75rem] mb-0 sm:mt-6 text-sm sm:text-base
              font-['Lato-Regular'] font-normal
            ">
              sub-OG allocation
            </dt>
            <dd><a
              className="mb-[0.75rem] sm:mb-6 text-lg sm:text-2xl text-white
                         no-underline"
              href={ day.popup.subOGLink }
              target="_blank"
            >
              Click to open
            </a></dd>
          </div>
        </dl>
      </div>
    </dialog>
  );
});

export default DayModal;