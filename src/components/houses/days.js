import DayCardLabel from "./DayCardLabel";
import bg1 from "./img/day_1.svg";
import bg2 from "./img/day_2.svg";
import bg3 from "./img/day_3.svg";
import bg4 from "./img/day_4.svg";
import img1 from "./img/day1.JPG";
import img2 from "./img/day2.JPG";
import img3 from "./img/day3.JPG";
import img4 from "./img/day4.JPG";

const days = [
  {
    card: {
      background: bg1,
      title: "Day 1",
      get label() {
        const text = "Night Game";

        return (
          <DayCardLabel className="rotate-[-9.19deg]">
            <p
              className={`mb-0 bg-gradient-to-b from-[#FFF4CF] to-[#FF4D00]
                          bg-clip-text ${this.twBorder}`}
            >
              {text}
            </p>
            <span
              // Text shadow
              className={`absolute inset-0 -z-20 select-none
                          [text-shadow:_2px_2px_0_#86371E]
                          md:[text-shadow:_3px_3px_0_#86371E]`}
            >
              {text}
            </span>
          </DayCardLabel>
        );
      },
      date: {
        text: "4 Aug",
        datetime: "2023-07-29",
        twRotate: "rotate-[-7.49deg]",
      },
      twBorder:
        "[-webkit-text-stroke:_1px_#86371E] md:[-webkit-text-stroke:_2px_#86371E]",
    },
    popup: {
      twBackground:
        "bg-gradient-to-t from-[#233C55] from-[2.47%] to-[#8A90C9] to-[94.42%]",
      video: img1,
      location: "NTU",
      time: "19.45 - 23:00",
    },
  },
  {
    card: {
      background: bg2,
      title: "Day 2",
      get label() {
        const text = "Beach Day";

        return (
          <DayCardLabel className="rotate-[10.07deg]">
            <p
              className={`mb-0 bg-gradient-to-b from-[#FFEEB1] from-50% to-[#B55F2F]
                          bg-clip-text ${this.twBorder}`}
            >
              {text}
            </p>
            <span
              // Text shadow
              className={`absolute inset-0 -z-20 select-none
                          [text-shadow:_2px_2px_0_#B86635]
                          md:[text-shadow:_3px_3px_0_#B86635]`}
            >
              {text}
            </span>
          </DayCardLabel>
        );
      },
      date: {
        text: "5 Aug",
        datetime: "2023-07-29",
        twRotate: "rotate-[-7.49deg]",
      },
      twBorder:
        "[-webkit-text-stroke:_1px_#B86635] md:[-webkit-text-stroke:_2px_#B86635]",
    },
    popup: {
      twBackground:
        "bg-gradient-to-b from-[#F9E6B5] from-[6.68%] to-[#328A7A] to-[93.32%]",
      video: img2,

      location: "Sentosa",
      time: "14.00 - 19:00",
    },
  },
  {
    card: {
      background: bg3,
      title: "Day 3",
      get label() {
        const text = "Field Day";

        return (
          <DayCardLabel className="rotate-[-9.19deg]">
            <p
              className={`mb-0 bg-gradient-to-b from-[#DBFFD6] from-30% to-[#5F7603]
                          bg-clip-text ${this.twBorder}`}
            >
              {text}
            </p>
            <span
              // Text shadow
              className={`absolute inset-0 -z-20 select-none
                          [text-shadow:_2px_2px_0_#484F2D]
                          md:[text-shadow:_3px_3px_0_#484F2D]`}
            >
              {text}
            </span>
          </DayCardLabel>
        );
      },
      date: {
        text: "6 Aug",
        datetime: "2023-07-29",
        twRotate: "rotate-[0deg]",
      },
      twBorder:
        "[-webkit-text-stroke:_1px_#484F2D] md:[-webkit-text-stroke:_2px_#484F2D]",
    },
    popup: {
      twBackground:
        "bg-gradient-to-b from-[#DBFFD6] from-[0.39%] to-[#4C5F02] to-[92.62%]",
      video: img3,
      location: "Around Singapore",
      time: "13:00 - 19:15",
    },
  },
  {
    card: {
      background: bg4,
      title: "Day 4",
      get label() {
        const text = ["Awards", "Night"];

        return (
          <div className="translate-y-3 sm:translate-y-4 md:translate-y-6">
            <DayCardLabel
              className="-translate-x-8 translate-y-1 rotate-[10.98deg]
                         sm:-translate-x-14 md:-translate-x-16
                         lg:-translate-x-[5.5rem] lg:translate-y-2"
            >
              <p
                className={`mb-0 bg-gradient-to-b from-white from-40% to-[#BC8700]
                            bg-clip-text ${this.twBorder}`}
              >
                {text[0]}
              </p>
              <span
                // Text shadow
                className={`absolute inset-0 -z-20 select-none
                            [text-shadow:_2px_2px_0_#877101]
                            md:[text-shadow:_3px_3px_0_#877101]`}
              >
                {text[0]}
              </span>
            </DayCardLabel>
            <DayCardLabel
              className="-translate-y-1 translate-x-11 rotate-[10.98deg]
                         sm:translate-x-[4.75rem] md:translate-x-[5.75rem]
                         lg:translate-x-[7.5rem]"
            >
              <p
                className={`mb-0 bg-gradient-to-b from-white from-40% to-[#BC8700]
                            bg-clip-text ${this.twBorder}`}
              >
                {text[1]}
              </p>
              <span
                // Text shadow
                className={`absolute inset-0 -z-20 select-none
                            [text-shadow:_2px_2px_0_#877101]
                            md:[text-shadow:_3px_3px_0_#877101]`}
              >
                {text[1]}
              </span>
            </DayCardLabel>
          </div>
        );
      },
      date: {
        text: "7 Aug",
        datetime: "2023-07-29",
        twRotate:
          "rotate-[-15.85deg] -translate-x-4 -translate-y-9 sm:-translate-x-7 sm:-translate-y-14 md:-translate-x-8 md:-translate-y-[3.75rem] lg:-translate-x-11 lg:-translate-y-20",
      },
      twBorder:
        "[-webkit-text-stroke:_1px_#877101] md:[-webkit-text-stroke:_2px_#877101]",
    },
    popup: {
      twBackground:
        "bg-gradient-to-b from-black from-[0.39%] to-[#674A00] to-[92.62%]",
      video: img4,
      location: "Orchard",
      time: "17:00-23:00",
    },
  },
];

export default days;
