import AngerImg from "./img/anger.png";
import SadnessImg from "./img/sadness.png";
import DisgustImg from "./img/disgust.png";
import FearImg from "./img/fear.png";

const anger = {
  "name": "Anger",
  "background": "linear-gradient(180deg, #8F181C 0%, #FB5A44 48.44%, #FB8144 97.4%)",
  "card": {
    "label": "id card",
    "details": ["detail 1", "detail 2", "detail 3", "detail 4"],
    "background": "radial-gradient(50% 50% at 50% 50%, #E93622 0%, #8E0000 96.35%)",
    "image": AngerImg,
  },
};

const sadness = {
  "name": "Sadness",
  "background": "linear-gradient(180deg, #091F5F 0%, #6BC9F5 48.44%, #7DACBB 97.4%)",
  "card": {
    "label": "id card",
    "details": ["detail 1", "detail 2", "detail 3", "detail 4"],
    "background": "radial-gradient(50% 50% at 50% 50%, #72CFEF 0%, #2D4685 96.35%)",
    "image": SadnessImg,
  },
};

const disgust = {
  "name": "Disgust",
  "background": "linear-gradient(180deg, #2C702E 0%, #62AF35 25.27%, #E5E59A 76.22%)",
  "card": {
    "label": "id card",
    "details": ["detail 1", "detail 2", "detail 3", "detail 4"],
    "background": "radial-gradient(50% 50% at 50% 50%, #E3EA9B 0%, #20610B 96.35%)",
    "image": DisgustImg,
  },
};

const fear = {
  "name": "Fear",
  "background": "linear-gradient(180deg, #5E3781 0%, #A484B9 25.27%, #DDB9E3 76.22%)",
  "card": {
    "label": "id card",
    "details": ["detail 1", "detail 2", "detail 3", "detail 4"],
    "background": "radial-gradient(50% 50% at 50% 50%, #DEC4E0 0%, #5F2D8B 96.35%)",
    "image": FearImg,
  },
};

const houses = { anger, sadness, disgust, fear };

export default houses;