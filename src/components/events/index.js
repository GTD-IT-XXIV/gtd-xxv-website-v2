import "../../index.css"
import "./events.css"

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';

import day1 from "./images/day1.svg"
import day2 from "./images/day2.svg"
import day3 from "./images/day3.svg"

const FadeInOnScroll = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <CSSTransition
      in={inView}
      timeout={1500}
      classNames="fade" 
    >
      <div ref={ref}>{children}</div>
    </CSSTransition>
  );
};

const Events = () => {
  return (
    <div class="bg-gradient-to-b from-[#3F2E7C] to-[#7E4081]">
      <div className="navigationContainer">

        <div class="mx-auto pt-10 flex-none md:pt-[8%]">
            <p style={{fontFamily: "InsideOut"}} class="text-3xl smed:text-4xl md:text-5xl text-white text-center">Events</p>
        </div>
        
        <div class="pb-10">

          <FadeInOnScroll>
            <div class="py-[20px] md:py-10 flex-none relative">
                <p style={{fontFamily: "InsideOut"}} class="text-lg smed:text-3xl md:text-4xl text-white text-left pl-[5%] md:pl-[7%]">Day 1 - 6 Aug 2023</p>
                <img src={day1} class="h-full w-[90%] md:scale-[95%] md:py-5 mx-auto"></img>
                <div class="absolute left-[43%] top-[42%] ssmed:top-[35%] smed:top-[33%] md:top-[35%] lg:left-[44%] lg:top-[30%] md:mr-[10%] flex mr-[7%]">
                  <p style={{fontFamily: "Lato-Regular"}} class="text-xxs text-white ssmed:text-sm smed:text-base  md:text-xl lg:text-2xl xl:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna in orci placerat aliquam sit amet a lacus. Vestibulum dapibus nisi sit amet mattis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna in orci placerat aliquam sit amet</p>
                </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
          <div class="py-[20px] md:py-10 flex-none relative">
              <p style={{fontFamily: "InsideOut"}} class="text-lg smed:text-3xl md:text-4xl text-white text-left pl-[5%] md:pl-[7%]">Day 2 - 7 Aug 2023</p>
              <img src={day2} class="h-full w-[90%] md:scale-[95%] md:py-5 mx-auto"></img>
              <div class="absolute left-[43%] top-[42%] ssmed:top-[35%] smed:top-[33%] md:top-[35%] lg:left-[44%] lg:top-[30%] md:mr-[10%] flex mr-[7%]">
                <p style={{fontFamily: "Lato-Regular"}} class="text-xxs text-[#2E5E50] ssmed:text-sm smed:text-base  md:text-xl lg:text-2xl xl:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna in orci placerat aliquam sit amet a lacus. Vestibulum dapibus nisi sit amet mattis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna in orci placerat aliquam sit amet</p>
              </div>
          </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
          <div class="py-[20px] md:py-10 flex-none relative">
              <p style={{fontFamily: "InsideOut"}} class="text-lg smed:text-3xl md:text-4xl text-white text-left pl-[5%] md:pl-[7%]">Day 3 - 8 Aug 2023</p>
              <img src={day3} class="h-full w-[90%] md:scale-[95%] md:py-5 mx-auto"></img>
              <div class="absolute left-[43%] top-[42%] ssmed:top-[35%] smed:top-[33%] md:top-[35%] lg:left-[44%] lg:top-[30%] md:mr-[10%] flex mr-[7%]">
                <p style={{fontFamily: "Lato-Regular"}} class="text-xxs text-[#484F2D] ssmed:text-sm smed:text-base  md:text-xl lg:text-2xl xl:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna in orci placerat aliquam sit amet a lacus. Vestibulum dapibus nisi sit amet mattis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna in orci placerat aliquam sit amet</p>
              </div>
          </div>
          </FadeInOnScroll>

        </div>

      </div>
    </div>
  );
};

export default Events;
