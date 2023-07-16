import "../../index.css";
import "./events.css";

import React from "react";
import { CSSTransition } from "react-transition-group";
import { useInView } from "react-intersection-observer";

import day1 from "./images/day1.svg";
import day2 from "./images/day2.svg";
import day3 from "./images/day3.svg";
import day4 from "./images/day4.svg";

const FadeInOnScroll = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <CSSTransition in={inView} timeout={1500} classNames="fade">
      <div ref={ref}>{children}</div>
    </CSSTransition>
  );
};

const Events = () => {
  return (
    <div class="bg-gradient-to-b from-[#3F2E7C] to-[#7E4081]">
      <div className="navigationContainer">
        <div class="mx-auto pt-10 flex-none md:pt-[8%]">
          <p
            style={{ fontFamily: "InsideOut" }}
            class="text-3xl smed:text-4xl md:text-5xl lg:text-6xl text-white text-center"
          >
            Events
          </p>
        </div>

        <div class="pb-10">
          <FadeInOnScroll>
            <div class="py-[20px] md:py-10 flex-none relative">
              <p
                style={{ fontFamily: "InsideOut" }}
                class="text-lg smed:text-3xl md:text-4xl text-white text-left pl-[5%] md:pl-[7%]"
              >
                Day 1 - 4 Aug 2023
              </p>
              <img
                src={day1}
                class="h-full w-[90%] md:scale-[95%] md:py-5 mx-auto"
              ></img>
              <div class="absolute left-[43%] top-[42%] ssmed:top-[35%] smed:top-[33%] md:top-[35%] lg:left-[44%] lg:top-[30%] md:mr-[10%] flex mr-[7%]">
                {/* <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-white font-normal">
                  Participants will gather at NTU for an evening filled with
                  thrilling night games. This segment is designed to break the
                  ice and create a lively and welcoming atmosphere. Freshmen can
                  expect a range of exciting challenges and activities that
                  promote interaction among their peers and seniors.
                </p> */}

                <p
                  style={{ fontFamily: "Lato-Regular" }}
                  className="event-paragraph  text-white"
                >
                  Participants will gather at NTU for an evening filled with
                  thrilling night games. This segment is designed to break the
                  ice and create a lively and welcoming atmosphere. Freshmen can
                  expect a range of exciting challenges and activities that
                  promote interaction among their peers and seniors.
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div class="py-[20px] md:py-10 flex-none relative">
              <p
                style={{ fontFamily: "InsideOut" }}
                class="text-lg smed:text-3xl md:text-4xl text-white text-left pl-[5%] md:pl-[7%]"
              >
                Day 2 - 5 Aug 2023
              </p>
              <img
                src={day2}
                class="h-full w-[90%] md:scale-[95%] md:py-5 mx-auto"
              ></img>
              <div class="absolute left-[43%] top-[42%] ssmed:top-[35%] smed:top-[33%] md:top-[35%] lg:left-[44%] lg:top-[30%] md:mr-[10%] flex mr-[7%]">
                <p
                  style={{ fontFamily: "Lato-Regular" }}
                  className="event-paragraph  text-[#2E5E50]"
                >
                  Freshmen can look forward to a fun-filled afternoon of
                  team-building activities and friendly competition. The
                  picturesque beach setting offers the perfect backdrop for
                  engaging in various sports, water activities, and cooperative
                  challenges. This day provides a chance for participants to
                  strengthen their bonds, enjoy the sun and sand, and create
                  lasting memories in a relaxed and enjoyable environment.
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div class="py-[20px] md:py-10 flex-none relative">
              <p
                style={{ fontFamily: "InsideOut" }}
                class="text-lg smed:text-3xl md:text-4xl text-white text-left pl-[5%] md:pl-[7%]"
              >
                Day 3 - 6 Aug 2023
              </p>
              <img
                src={day3}
                class="h-full w-[90%] md:scale-[95%] md:py-5 mx-auto"
              ></img>
              <div class="absolute left-[43%] top-[42%] ssmed:top-[35%] smed:top-[33%] md:top-[35%] lg:left-[44%] lg:top-[30%] md:mr-[10%] flex mr-[7%]">
                <p
                  style={{ fontFamily: "Lato-Regular" }}
                  className="event-paragraph  text-[#2E5E50]"
                >
                  Freshmen will experience an adventurous exploration of
                  Singapore's diverse locations. We will take participants on a
                  journey to discover the city-state's landmarks and hidden
                  gems. Through interactive challenges and exploration
                  activities, freshmen will gain a deeper appreciation for
                  Singapore's culture, heritage, and natural beauty.
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div class="py-[20px] md:py-10 flex-none relative">
              <p
                style={{ fontFamily: "InsideOut" }}
                class="text-lg smed:text-3xl md:text-4xl text-white text-left pl-[5%] md:pl-[7%]"
              >
                Day 4 - 7 Aug 2023
              </p>
              <img
                src={day4}
                class="h-full w-[90%] md:scale-[95%] md:py-5 mx-auto"
              ></img>
              <div class="absolute left-[43%] top-[40%] ssmed:top-[35%] smed:top-[33%] md:top-[35%] lg:left-[44%] lg:top-[25%] md:mr-[10%] flex mr-[7%]">
                <p
                  style={{ fontFamily: "Lato-Regular" }}
                  className="event-paragraph  text-white"
                >
                  Finally, we will end our program with an unforgettable Awards
                  Night held at Orchard. This evening event is a grand
                  celebration of the achievements and experiences of the
                  participants throughout the orientation camp.The Awards Night
                  offers a platform to honor outstanding performances, express
                  gratitude to the organizing committee, and bid farewell to GTD
                  with a sense of pride, unity, and anticipation for the journey
                  ahead.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Events;
