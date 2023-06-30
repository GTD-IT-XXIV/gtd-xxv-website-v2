import { useState } from "react";

import insideOutImage from "../../../assets/img/home/gtdlogo.png";
import lightImage from "../../../assets/img/home/light.svg";
import "../home.css";

const Screen = () => {
  const [screen, setScreen] = useState(false);

  const screenPosition =
    "top-1/3 left-2/4 -translate-x-[50%] -translate-y-[50%]";
  const screenFormat = "w-5/6 aspect-[2] lg:aspect-[3.5] rounded-[30px]";

  return (
    <>
      <div className={`absolute screen-bg ${screenPosition} ${screenFormat}`}>
        <div
          className="w-3/6 lg:w-2/6 absolute bottom-0 left-2/4 -translate-x-[50%] aspect-[calc(388/262)] bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${insideOutImage})`,
          }}
        />
        <div
          className={`absolute w-3/6 top-2/4 left-2/4 -translate-x-[50%] -translate-y-[45%]`}
        >
          {/* <p
            className="-rotate-[17deg] text-center text-5xl sm:text-6xl md:text-8xl text-white"
            style={{ fontFamily: "InsideOut" }}
          >
            GTD
            <br />
            Inside out
          </p> */}
        </div>
      </div>
      <div
        className={`${
          screen ? "opacity-100" : "opacity-0"
        } opacity-trans bg-no-repeat bg-contain absolute bg-center w-full aspect-[2] lg:aspect-[3] rounded-[30px] ${screenPosition}`}
        style={{ backgroundImage: `url(${lightImage})` }}
      />
      <div
        className={`absolute bg-black/50 opacity-trans ${screenPosition} ${
          screen ? "opacity-0" : "opacity-100"
        } ${screenFormat}`}
        onMouseEnter={() => setScreen(true)}
        onMouseLeave={() => setScreen(false)}
      />
    </>
  );
};

export default Screen;
