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
      "My favorite word is curse word",
      "I hate you, Fear",
      "C’mon where’s my morning caffeine dose?",
      "Is it just me, or everyone else is stupid",
    ],
    twBackground:
      "bg-[radial-gradient(50%_50%_at_50%_50%,#E93622_0%,#8E0000_96.35%)]",
    image: angerImg,
    alt: "Anger from Inside Out",
  },
  dresscode: {
    "Day 1": "Free Colour T-Shirt",
    "Day 2": "Red T-Shirt & Sandal",
    "Day 3": "Black T-Shirt & Shoes",
    "Day 4": "GTD T-Shirt",
  },
  subOGLink: {
    "Day 1":
      "https://docs.google.com/spreadsheets/d/11ZPilL2vXnJRwLEf-CLvrxNymfFsZk74wop3DrnGxv8/edit#gid=2137811853",
    "Day 2":
      "https://docs.google.com/spreadsheets/d/1npr0G99WLEmtJrvoTzbdp7Wa92ZCdCx0qWfNp542QY4/edit#gid=0",
    "Day 3":
      "https://docs.google.com/spreadsheets/d/1l9r6yDOTJXIEugeZpXLFND5Qy6mup6DywGHbckcMPVs/edit#gid=0",
  },
  gameFlow: {
    "Day 1":
      "https://docs.google.com/spreadsheets/d/1x90q9VzFGNN4f-EH7aLZWIM61oYitqRl9iU1QdB2vFo/edit#gid=0",
    "Day 2":
      "https://docs.google.com/spreadsheets/d/1_SOLMm0S0zRCB222ZXP5snjfutDaDc1CSlu0GVSnnjw/edit#gid=0",
    "Day 3":
      "https://docs.google.com/spreadsheets/d/1hC4gkQISnrHSRO8u8owBm3W2rgcG2VTUOozNdO0K7cE/edit#gid=0",
  },
};

const sadness = {
  name: "Sadness",
  twColorStops: ["from-[#091F5F]", "via-[#6BC9F5]", "to-[#7DACBB]"],
  card: {
    label: "ID Card",
    details: [
      "It’s a rainy day and monday :(",
      "I want to feel..included",
      "It’s not my fault guys",
      "Such a good day to be melancholic",
    ],
    twBackground: `bg-[radial-gradient(50%_50%_at_50%_50%,#72CFEF_0%,#2D4685_96.35%)]`,
    image: sadnessImg,
    alt: "Sadness from Inside Out",
  },
  dresscode: {
    "Day 1": "Free Colour T-Shirt",
    "Day 2": "Blue T-Shirt & Sandal",
    "Day 3": "White T-Shirt & Shoes",
    "Day 4": "GTD T-Shirt",
  },
  gameFlow: {
    "Day 1":
      "https://docs.google.com/spreadsheets/d/1x90q9VzFGNN4f-EH7aLZWIM61oYitqRl9iU1QdB2vFo/edit#gid=759064363",
    "Day 2":
      "https://docs.google.com/spreadsheets/d/1_SOLMm0S0zRCB222ZXP5snjfutDaDc1CSlu0GVSnnjw/edit#gid=1191933180",
    "Day 3":
      "https://docs.google.com/spreadsheets/d/1hC4gkQISnrHSRO8u8owBm3W2rgcG2VTUOozNdO0K7cE/edit#gid=587111399",
  },
  subOGLink: {
    "Day 1":
      "https://docs.google.com/spreadsheets/d/11ZPilL2vXnJRwLEf-CLvrxNymfFsZk74wop3DrnGxv8/edit#gid=0",
    "Day 2":
      "https://docs.google.com/spreadsheets/d/1npr0G99WLEmtJrvoTzbdp7Wa92ZCdCx0qWfNp542QY4/edit#gid=615069938",
    "Day 3":
      "https://docs.google.com/spreadsheets/d/1l9r6yDOTJXIEugeZpXLFND5Qy6mup6DywGHbckcMPVs/edit#gid=134044093",
  },
};

const disgust = {
  name: "Disgust",
  twColorStops: ["from-[#2C702E]", "via-[#62AF35]", "to-[#E5E59A]"],
  card: {
    label: "ID Card",
    details: [
      "EWWW Brocollii",
      "Oh. My. God. Such a dork",
      "Don’t you dare touch it!",
      "Honestly, you suck",
    ],
    twBackground: `bg-[radial-gradient(50%_50%_at_50%_50%,#E3EA9B_0%,#20610B_96.35%)]`,
    image: disgustImg,
    alt: "Disgust from Inside Out",
  },
  dresscode: {
    "Day 1": "Free Colour T-Shirt",
    "Day 2": "Green T-Shirt & Sandal",
    "Day 3": "Brown T-Shirt & Shoes",
    "Day 4": "GTD T-Shirt",
  },
  gameFlow: {
    "Day 1":
      "https://docs.google.com/spreadsheets/d/1x90q9VzFGNN4f-EH7aLZWIM61oYitqRl9iU1QdB2vFo/edit#gid=731762913",
    "Day 2":
      "https://docs.google.com/spreadsheets/d/1_SOLMm0S0zRCB222ZXP5snjfutDaDc1CSlu0GVSnnjw/edit#gid=1902229558",
    "Day 3":
      "https://docs.google.com/spreadsheets/d/1hC4gkQISnrHSRO8u8owBm3W2rgcG2VTUOozNdO0K7cE/edit#gid=1439466534",
  },
  subOGLink: {
    "Day 1":
      "https://docs.google.com/spreadsheets/d/11ZPilL2vXnJRwLEf-CLvrxNymfFsZk74wop3DrnGxv8/edit#gid=1990738111",
    "Day 2":
      "https://docs.google.com/spreadsheets/d/1npr0G99WLEmtJrvoTzbdp7Wa92ZCdCx0qWfNp542QY4/edit#gid=67968594",
    "Day 3":
      "https://docs.google.com/spreadsheets/d/1l9r6yDOTJXIEugeZpXLFND5Qy6mup6DywGHbckcMPVs/edit#gid=1700871626",
  },
};

const fear = {
  name: "Fear",
  twColorStops: ["from-[#5E3781]", "via-[#A484B9]", "to-[#DDB9E3]"],
  card: {
    label: "ID Card",
    details: [
      "Who’s hiding over there?",
      "Careful guys, he might bite us",
      "Anger, what did I do wrong to you?",
      "ANGER, get that spider away from me now! I’m scared",
    ],
    twBackground: `bg-[radial-gradient(50%_50%_at_50%_50%,#DEC4E0_0%,#5F2D8B_96.35%)]`,
    image: fearImg,
    alt: "Fear from Inside Out",
  },
  dresscode: {
    "Day 1": "Free Colour T-Shirt",
    "Day 2": "Purple T-Shirt & Sandal",
    "Day 3": "Blue T-Shirt & Shoes",
    "Day 4": "GTD T-Shirt",
  },
  gameFlow: {
    "Day 1":
      "https://docs.google.com/spreadsheets/d/1x90q9VzFGNN4f-EH7aLZWIM61oYitqRl9iU1QdB2vFo/edit#gid=1046645760",
    "Day 2":
      "https://docs.google.com/spreadsheets/d/1_SOLMm0S0zRCB222ZXP5snjfutDaDc1CSlu0GVSnnjw/edit#gid=259030207",
    "Day 3":
      "https://docs.google.com/spreadsheets/d/1hC4gkQISnrHSRO8u8owBm3W2rgcG2VTUOozNdO0K7cE/edit#gid=62053207",
  },
  subOGLink: {
    "Day 1":
      "https://docs.google.com/spreadsheets/d/11ZPilL2vXnJRwLEf-CLvrxNymfFsZk74wop3DrnGxv8/edit#gid=834341216",
    "Day 2":
      "https://docs.google.com/spreadsheets/d/1npr0G99WLEmtJrvoTzbdp7Wa92ZCdCx0qWfNp542QY4/edit#gid=827062275",
    "Day 3":
      "https://docs.google.com/spreadsheets/d/1l9r6yDOTJXIEugeZpXLFND5Qy6mup6DywGHbckcMPVs/edit#gid=1140517494",
  },
};

const houses = { anger, sadness, disgust, fear };

export default houses;
