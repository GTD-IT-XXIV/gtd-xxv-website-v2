import { Link } from "react-router-dom";

import "./groups.css";
import fear from "../../../assets/img/home/fear.png";
import anger from "../../../assets/img/home/anger.png";
import disgust from "../../../assets/img/home/disgust.png";
import sadness from "../../../assets/img/home/sadness.png";

const routes = {
  anger: "/anger",
  sadness: "/sadness",
  disgust: "/disgust",
  fear: "/fear",
};

const ButtonClass =
  "absolute w-1/2 h-1/2 hover:rounded-xl p-2 hover-animation hover:scale-110 hover:z-1";

const Groups = () => {
  return (
    <div className="w-full aspect-square relative">
      <Link to={routes.anger}>
        <div
          className={`top-0 left-0 bg-[#EA9F95] rounded-tl-xl hover:z-10 ${ButtonClass} outer-image`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-tl-xl inner-image"
            style={{ backgroundImage: `url(${anger})` }}
          />
        </div>
      </Link>
      <Link to={routes.sadness}>
        <div
          className={`top-0 right-0 bg-[#CBEDFD] rounded-tr-xl hover:z-10 ${ButtonClass}`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-tr-xl inner-image"
            style={{ backgroundImage: `url(${sadness})` }}
          />
        </div>
      </Link>
      <Link to={routes.fear}>
        <div
          className={`bottom-0 left-0 bg-[#E4CAE6] rounded-bl-xl hover:z-10 ${ButtonClass} outer-image`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-bl-xl inner-image"
            style={{ backgroundImage: `url(${fear})` }}
          />
        </div>
      </Link>
      <Link to={routes.disgust}>
        <div
          className={`bottom-0 right-0 bg-[#D0F29F] rounded-br-xl hover:z-10 ${ButtonClass} outer-image`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-br-xl inner-image"
            style={{ backgroundImage: `url(${disgust})` }}
          />
        </div>
      </Link>
    </div>
  );
};

export default Groups;
