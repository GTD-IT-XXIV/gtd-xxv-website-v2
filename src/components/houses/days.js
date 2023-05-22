import bg1 from "./img/day_1.svg";
import bg2 from "./img/day_2.svg";
import bg3 from "./img/day_3.svg";

const days = {
  1: {
    "card": {
      "background": bg1,
      "title": {
        "text": "Day 1",
        "twBorder": "[-webkit-text-stroke:_1px_#86371E] md:[-webkit-text-stroke:_2px_#86371E]",
      },
      "label": {
        "text": "Night Game",
        "twBackground": "bg-gradient-to-b from-[#FFF4CF] to-[#FF4D00]",
        "twBorder": "[-webkit-text-stroke:_1px_#86371E]",
        "twShadow": "[text-shadow:_3px_3px_0_#86371E]",
        "twRotate": "rotate-[-9.19deg]",
      },
      "date": {
        "text": "6 Aug",
        "twRotate": "rotate-[-7.49deg]",
      },
    },
    "popup": {
      "background": "linear-gradient(355.6deg, #233C55 2.47%, #8A90C9 94.42%)",
      "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "location": "North Spine",
      "time": "9PM - 12PM",
      "subOGLink": "https://www.google.com/",
    },
  },
  2: {
    "card": {
      "background": bg2,
      "title": {
        "text": "Day 2",
        "twBorder": "[-webkit-text-stroke:_1px_#B86635] md:[-webkit-text-stroke:_2px_#B86635]",
      },
      "label": {
        "text": "Beach Day",
        "twBackground": "bg-gradient-to-b from-[#FFEEB1] to-[#B55F2F]",
        "twBorder": "[-webkit-text-stroke:_2px_#B86635]",
        "twShadow": "[text-shadow:_5px_5px_0_#B86635]",
        "twRotate": "rotate-[10.07deg]",
      },
      "date": {
        "text":"7 Aug",
        "twRotate": "rotate-[-7.49deg]",
      },
    },
    "popup": {
      "background": "linear-gradient(188.76deg, #F9E6B5 6.68%, #328A7A 93.32%)",
      "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "location": "Siloso Beach",
      "time": "10AM - 6PM",
      "subOGLink": "https://www.google.com/",
    },
  },
  3: {
    "card": {
      "background": bg3,
      "title": {
        "text": "Day 3",
        "twBorder": "[-webkit-text-stroke:_1px_#B86635] md:[-webkit-text-stroke:_2px_#484F2D]",
      },
      "label": {
        "text": "Field Day",
        "twBackground": "bg-gradient-to-b from-[#DBFFD6] to-[#5F7603]",
        "twBorder": "[-webkit-text-stroke:_2px_#484F2D]",
        "twShadow": "[text-shadow:_4px_4px_0px_#484F2D]",
        "twRotate": "rotate-[-9.19deg]",
      },
      "date": {
        "text": "8 Aug",
        "twRotate": "rotate-[0deg]",
      },
    },
    "popup": {
      "background": "linear-gradient(179.55deg, #DBFFD6 0.39%, #4C5F02 92.62%)",
      "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "location": "Field",
      "time": "9AM - 6PM",
      "subOGLink": "https://www.google.com/",
    },
  },
}

export default days;