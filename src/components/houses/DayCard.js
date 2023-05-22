import days from "./days";

const Ticket = ({ house, day }) => {
  return (
    <div className="w-full sm:h-[160px] md:h-[254px] lg:h-[267px] flex grow relative 
                    items-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
    >
      <img className="absolute -z-30" src={ days[day].card.background } />
      <div className="flex grow relative items-center px-3 md:px-6 gap-x-6 md:gap-x-12 font-['InsideOut']">
        <span className={ `w-[38%] text-white ${ days[day].card.title.twBorder } 
                          [text-shadow:_0_4px_4px_rgb(0,0,0,40%)] text-4xl 
                          sm:text-5xl md:text-8xl text-center` }>
          { days[day].card.title.text }
        </span>
        <div className="w-[62%] flex flex-col translate-y-2">
          <div className={ `relative -z-10 text-transparent text-4xl sm:text-5xl 
                            md:text-8xl text-center whitespace-nowrap
                            ${ days[day].card.label.twRotate }` }
                            >
            <span className={ `bg-clip-text ${ days[day].card.label.twBackground } 
                              ${ days[day].card.label.twBorder }` }
                              >
              { days[day].card.label.text }
            </span>
            <span className={ `absolute -z-20 inset-0 
                              ${ days[day].card.label.twShadow }` }
                              >
              { days[day].card.label.text }
            </span>
          </div>
          <div className="z-0 flex justify-center">
            <span className={ `text-center text-2xl sm:text-3xl md:text-5xl 
                              text-white [text-shadow:_0_4px_4px_rgba(0,0,0,0.25)] 
                              -translate-y-5 ${ days[day].card.date.twRotate }` }
                              >
              { days[day].card.date.text }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;