import bg1 from "./img/day_1.svg";
import bg2 from "./img/day_2.svg";
import bg3 from "./img/day_3.svg";

const days = [
  {
    card: {
      background: bg1,
      title: "Day 1",
      label: {
        text: "Night Game",
        twBackground: "bg-gradient-to-b from-[#FFF4CF] to-[#FF4D00]",
        twShadow:
          "[text-shadow:_2px_2px_0_#86371E] md:[text-shadow:_3px_3px_0_#86371E]",
        twRotate: "rotate-[-9.19deg]",
      },
      date: {
        text: "6 Aug",
        datetime: "2023-08-06",
        twRotate: "rotate-[-7.49deg]",
      },
      twBorder:
        "[-webkit-text-stroke:_1px_#86371E] md:[-webkit-text-stroke:_2px_#86371E]",
    },
    popup: {
      twBackground:
        "bg-gradient-to-t from-[#233C55] from-[2.47%] to-[#8A90C9] to-[94.42%]",
      video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      location: "North Spine",
      time: "9PM - 12PM",
      subOGLink: "https://www.google.com/",
    },
  },
  {
    card: {
      background: bg2,
      title: "Day 2",
      label: {
        text: "Beach Day",
        twBackground: "bg-gradient-to-b from-[#FFEEB1] to-[#B55F2F]",
        twShadow:
          "[text-shadow:_2px_2px_0_#B86635] md:[text-shadow:_5px_5px_0_#B86635]",
        twRotate: "rotate-[10.07deg]",
      },
      date: {
        text: "7 Aug",
        datetime: "2023-08-07",
        twRotate: "rotate-[-7.49deg]",
      },
      twBorder:
        "[-webkit-text-stroke:_1px_#B86635] md:[-webkit-text-stroke:_2px_#B86635]",
    },
    popup: {
      twBackground:
        "bg-gradient-to-b from-[#F9E6B5] from-[6.68%] to-[#328A7A] to-[93.32%]",
      video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      location: "Siloso Beach",
      time: "10AM - 6PM",
      subOGLink: "https://www.google.com/",
    },
  },
  {
    card: {
      background: bg3,
      title: "Day 3",
      label: {
        text: "Field Day",
        twBackground: "bg-gradient-to-b from-[#DBFFD6] to-[#5F7603]",
        twShadow:
          "[text-shadow:_2px_2px_0px_#484F2D] md:[text-shadow:_4px_4px_0px_#484F2D]",
        twRotate: "rotate-[-9.19deg]",
      },
      date: {
        text: "8 Aug",
        datetime: "2023-08-08",
        twRotate: "rotate-[0deg]",
      },
      twBorder:
        "[-webkit-text-stroke:_1px_#B86635] md:[-webkit-text-stroke:_2px_#484F2D]",
    },
    popup: {
      twBackground:
        "bg-gradient-to-b from-[#DBFFD6] from-[0.39%] to-[#4C5F02] to-[92.62%]",
      video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      location: "Field",
      time: "9AM - 6PM",
      subOGLink: "https://www.google.com/",
    },
  },
];

export default days;
