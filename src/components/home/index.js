import { useState } from "react";
import insideOutImage from "../../assets/img/home/inside_out.png";
import lightImage from "../../assets/img/home/light.svg";

import "./home.css";

import Screen from "./components/screen";
import Chair from "./components/chair";
import Television from "./components/television";
import Carousel from "./components/carousel";
import Groups from './components/groups';

import carouselImages from './carouseImages.json'

const screenPosition = "top-1/3 left-2/4 -translate-x-[50%] -translate-y-[50%]";
const screenFormat = "w-5/6 aspect-[2] lg:aspect-[3.5] rounded-[30px]";



const Home = () => {
  const [visible, setVisible] = useState(false);
  const [screen, setScreen] = useState(false);

  function handleClick() {
    setVisible(visible ? false : true);
  }

  return (
    <>
      <div className="home">
        <div className="navigationContainer">
          {/* First section */}
          <div
            className="w-full h-screen relative bg-[#190F3E] rounded-br-[150px] md:rounded-br-[300px] overflow-hidden"
            style={{ boxShadow: "0px 0px 100px rgba(255,255,255,0.30)" }}
          >
            <Screen />
            <div className={`absolute w-full flex flex-row bottom-0`}>
              <Chair
                orientation={"right-0 text-center"}
                text={"Trailer"}
                topClassName={"translate-x-[10%] lg:translate-x-1/4"}
                middleClassName={
                  "translate-x-[calc(100%/22)] lg:translate-x-[10%]"
                }
                route="#trailer"
              />
              <Chair
                orientation={"left-2/4 -translate-x-[50%] text-center"}
                text={"Storyline"}
                route="#storyline"
              />
              <Chair
                orientation={"left-0 text-center"}
                text={"OG"}
                topClassName={"-translate-x-[10%] lg:-translate-x-1/4"}
                middleClassName={
                  "-translate-x-[calc(100%/22)] lg:-translate-x-[10%]"
                }
                route="#og"
              />
            </div>
          </div>
          {/* Second section */}
          <div className="w-full h-screen relative py-10" id="trailer">
            <div className="h-full flex flex-column align-items-center justify-center">
              <h1
                className="text-center text-white text-5xl"
                style={{ fontFamily: "InsideOut" }}
              >
                Trailer
              </h1>
              <Television videoLink="https://www.youtube.com/embed/bIaX8E-FCuk" />
            </div>
          </div>
          {/* Third section */}
          <div className="w-full h-screen relative flex flex-column items-center justify-center" id="storyline">
            <h1
              className="text-center text-white text-5xl mb-5"
              style={{ fontFamily: "InsideOut" }}
            >
              Storyline
            </h1>
            <Carousel images={carouselImages} />
          </div>

          <div className="w-full h-screen relative flex flex-column items-center justify-center" id="og">
            <h1
              className="text-center text-white text-5xl mb-5"
              style={{ fontFamily: "InsideOut" }}
            >
              Orientation Groups
            </h1>
            <div className="flex flex-row w-full items-center justify-center">
                <div className="w-3/4 md:w-1/2 lg:w-2/6">
                <Groups/>
                </div>
                
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
