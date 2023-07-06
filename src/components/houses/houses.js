import angerImg from "./img/anger.png";
import sadnessImg from "./img/sadness.png";
import disgustImg from "./img/disgust.png";
import fearImg from "./img/fear.png";

const anger = {
  name: "Anger",
  twColorStops: ["from-[#8F181C]", "via-[#FB5A44]", "to-[#FB8144]"],
  card: {
    label: "ID Card",
    details: [
      "Character details #1",
      "Character details #2",
      "Character details #3",
      "Character details #4",
    ],
    twBackground:
      "bg-[radial-gradient(50%_50%_at_50%_50%,#E93622_0%,#8E0000_96.35%)]",
    image: angerImg,
    alt: "Anger from Inside Out",
  },
  dresscode: {
    "Day 1": "Free Colour Shirt",
    "Day 2": "Red Shirt & Sandal",
    "Day 3": "Black & White shirt & Shoes",
    "Day 4": "Anger T-Shirt 4",
  },
};

const sadness = {
  name: "Sadness",
  twColorStops: ["from-[#091F5F]", "via-[#6BC9F5]", "to-[#7DACBB]"],
  card: {
    label: "ID Card",
    details: [
      "Character details #1",
      "Character details #2",
      "Character details #3",
      "Character details #4",
    ],
    twBackground: `bg-[radial-gradient(50%_50%_at_50%_50%,#72CFEF_0%,#2D4685_96.35%)]`,
    image: sadnessImg,
    alt: "Sadness from Inside Out",
  },
  dresscode: {
    "Day 1": "Free Colour Shirt",
    "Day 2": "Blue Shirt & Sandal",
    "Day 3": "Pastel Tones Shirt & Shoes",
    "Day 4": "Sadness T-Shirt 4",
  },
};

const disgust = {
  name: "Disgust",
  twColorStops: ["from-[#2C702E]", "via-[#62AF35]", "to-[#E5E59A]"],
  card: {
    label: "ID Card",
    details: [
      "Character details #1",
      "Character details #2",
      "Character details #3",
      "Character details #4",
    ],
    twBackground: `bg-[radial-gradient(50%_50%_at_50%_50%,#E3EA9B_0%,#20610B_96.35%)]`,
    image: disgustImg,
    alt: "Disgust from Inside Out",
  },
  dresscode: {
    "Day 1": "Free Colour Shirt",
    "Day 2": "Green Shirt & Sandal",
    "Day 3": "Earth Tones Shirt & Shoes",
    "Day 4": "Disgust T-Shirt 4",
  },
};

const fear = {
  name: "Fear",
  twColorStops: ["from-[#5E3781]", "via-[#A484B9]", "to-[#DDB9E3]"],
  card: {
    label: "ID Card",
    details: [
      "Character details #1",
      "Character details #2",
      "Character details #3",
      "Character details #4",
    ],
    twBackground: `bg-[radial-gradient(50%_50%_at_50%_50%,#DEC4E0_0%,#5F2D8B_96.35%)]`,
    image: fearImg,
    alt: "Fear from Inside Out",
  },
  dresscode: {
    "Day 1": "Free Colour Shirt",
    "Day 2": "Purple Shirt & Sandal",
    "Day 3": "Neutral Tones Shirt & Shoes",
    "Day 4": "Fear T-Shirt 4",
  },
};

const houses = { anger, sadness, disgust, fear };

export default houses;
