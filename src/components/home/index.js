import { useState } from "react";
import insideOutImage from '../../assets/img/home/inside_out.png'
import lightImage from '../../assets/img/home/light.svg'

import "./home.css";

const screenPosition = "top-1/3 left-2/4 -translate-x-[50%] -translate-y-[50%]";
const screenFormat = "w-5/6 aspect-[2] lg:aspect-[3.5] rounded-[30px]";

const Chair = ({ text, orientation, topClassName, middleClassName }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative w-4/12"
      onMouseEnter={() => setHover(1)}
      onMouseLeave={() => setHover(0)}
    >
      <div
        className={`absolute chair-bg rounded-t-[25px] lg:rounded-t-[50px] w-10/12 lg:w-4/6 h-[200px] bottom-0 ${orientation} ${topClassName}`}
      />
      <div
        className={`absolute rounded-t-[25px] lg:rounded-t-[50px] w-11/12 lg:w-5/6 h-[150px] z-10 bottom-0 pt-2 ${hover?`bg-[#370615]`:'chair-bg'} ${orientation} ${middleClassName}`}
      >
        <h1 className="text-white" style={{ fontFamily: "InsideOut" }}>
          {text}
        </h1>
      </div>
      <div
        className={`absolute chair-bg rounded-t-[25px] lg:rounded-t-[50px] w-full h-[90px] z-20 bottom-0 ${orientation}`}
      />
    </div>
  );
};

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [screen, setScreen] = useState(false);

  function handleClick() {
    setVisible(visible ? false : true);
  }

  return (
    <>
      <div className="home bg-[#190F3E]">
        <div className="navigationContainer">
          {/* First section */}
          <div className="w-full h-screen relative">
            <div
              className={`absolute screen-bg ${screenPosition} ${screenFormat}`}
            >
              <div
                className="bg-no-repeat bg-contain absolute bottom-0 left-2/4 -translate-x-[50%] aspect-[calc(388/262)] w-3/6 lg:w-2/6"
                style={{
                  backgroundImage: `url(${insideOutImage})`,
                }}
              />
              <div
                className={`absolute w-3/6 top-2/4 left-2/4 -translate-x-[50%] -translate-y-[50%]`}
              >
                <p
                  className="-rotate-[17deg] text-center text-5xl sm:text-6xl md:text-8xl text-white"
                  style={{ fontFamily: "InsideOut" }}
                >
                  GTD
                  <br />
                  Inside out
                </p>
              </div>
            </div>
            <div
              className={`${
                screen ? "opacity-100" : "opacity-0"
              } bg-no-repeat bg-contain absolute bg-center w-full aspect-[2] lg:aspect-[3] rounded-[30px] ${screenPosition}`}
              style={{ backgroundImage: `url(${lightImage})` }}
            />
            <div
              className={`absolute bg-black/50 ${screenPosition} ${
                screen ? "opacity-0" : "opacity-100"
              } ${screenFormat}`}
              onMouseEnter={() => setScreen(true)}
              onMouseLeave={() => setScreen(false)}
            />
            <div className={`absolute w-full flex flex-row bottom-0`}>
              <Chair orientation={"right-0 text-center"} text={"Trailer"} topClassName={'translate-x-[10%] lg:translate-x-1/4'} middleClassName={'translate-x-[calc(100%/22)] lg:translate-x-[10%]'}/>
              <Chair orientation={"left-2/4 -translate-x-[50%] text-center"} text={"Storyline"} />
              <Chair orientation={"left-0 text-center"} text={"OG"} topClassName={'-translate-x-[10%] lg:-translate-x-1/4'} middleClassName={'-translate-x-[calc(100%/22)] lg:-translate-x-[10%]'}  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
