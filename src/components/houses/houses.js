import angerImg from "./img/anger.png";
import sadnessImg from "./img/sadness.png";
import disgustImg from "./img/disgust.png";
import fearImg from "./img/fear.png";

const anger = {
  "name": "Anger",
  "twColorStops": ["from-[#8F181C]", "via-[#FB5A44]", "to-[#FB8144]"],
  "card": {
    "label": "id card",
    "details": [
      "Character details #1",
      "Character details #2",
      "Character details #3",
      "Character details #4"
    ],
    "twBackground": "bg-[radial-gradient(50%_50%_at_50%_50%,#E93622_0%,#8E0000_96.35%)]",
    "image": angerImg,
  },
  "dresscode": {
    1: "Anger T-Shirt 1",
    2: "Anger T-Shirt 2",
    3: "Anger T-Shirt 3",
  },
};

const sadness = {
  "name": "Sadness",
  "twColorStops": ["from-[#091F5F]", "via-[#6BC9F5]", "to-[#7DACBB]"],
  "card": {
    "label": "id card",
    "details": [
      "Character details #1",
      "Character details #2",
      "Character details #3",
      "Character details #4"
    ],
    "twBackground": `bg-[radial-gradient(50%_50%_at_50%_50%,#72CFEF_0%,#2D4685_96.35%)]`,
    "image": sadnessImg,
  },
  "dresscode": {
    1: "Sadness T-Shirt 1",
    2: "Sadness T-Shirt 2",
    3: "Sadness T-Shirt 3",
  },
};

const disgust = {
  "name": "Disgust",
  "twColorStops": ["from-[#2C702E]", "via-[#62AF35]", "to-[#E5E59A]"],
  "card": {
    "label": "id card",
    "details": [
      "Character details #1",
      "Character details #2",
      "Character details #3",
      "Character details #4"
    ],
    "twBackground": `bg-[radial-gradient(50%_50%_at_50%_50%,#E3EA9B_0%,#20610B_96.35%)]`,
    "image": disgustImg,
  },
  "dresscode": {
    1: "Disgust T-Shirt 1",
    2: "Disgust T-Shirt 2",
    3: "Disgust T-Shirt 3",
  },
};

const fear = {
  "name": "Fear",
  "twColorStops": ["from-[#5E3781]", "via-[#A484B9]", "to-[#DDB9E3]"],
  "card": {
    "label": "id card",
    "details": [
      "Character details #1",
      "Character details #2",
      "Character details #3",
      "Character details #4"
    ],
    "twBackground": `bg-[radial-gradient(50%_50%_at_50%_50%,#DEC4E0_0%,#5F2D8B_96.35%)]`,
    "image": fearImg,
  },
  "dresscode": {
    1: "Fear T-Shirt 1",
    2: "Fear T-Shirt 2",
    3: "Fear T-Shirt 3",
  },
};

const houses = { anger, sadness, disgust, fear };

export default houses;