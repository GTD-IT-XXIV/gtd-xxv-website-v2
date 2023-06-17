import { useEffect, useState } from "react";
import movieReel from "../../../assets/img/home/movieReel.svg";
import inside_out from "../../../assets/img/home/inside_out.png";

import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import "./carousel.css";

const images = [
  { image: inside_out, text: "lol1" },
  {
    image: `https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQsDh35wh7euaPF9tfVLQHA-gNXAKfgz4DzzhTzapMUZkoX5epVGC7fZa_TGsB_DE5844xDPV_Vo10tp_Q`,
    text: "lol2",
  },
  { image: inside_out, text: "lol3" },
  {
    image: `https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQsDh35wh7euaPF9tfVLQHA-gNXAKfgz4DzzhTzapMUZkoX5epVGC7fZa_TGsB_DE5844xDPV_Vo10tp_Q`,
    text: "lol4",
  },
  { image: inside_out, text: "lol5" },
  {
    image: `https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQsDh35wh7euaPF9tfVLQHA-gNXAKfgz4DzzhTzapMUZkoX5epVGC7fZa_TGsB_DE5844xDPV_Vo10tp_Q`,
    text: "lol6",
  },
  { image: inside_out, text: "lol7" },
  {
    image: `https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQsDh35wh7euaPF9tfVLQHA-gNXAKfgz4DzzhTzapMUZkoX5epVGC7fZa_TGsB_DE5844xDPV_Vo10tp_Q`,
    text: "lol8",
  },
  { image: inside_out, text: "lol9" },
  {
    image: `https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQsDh35wh7euaPF9tfVLQHA-gNXAKfgz4DzzhTzapMUZkoX5epVGC7fZa_TGsB_DE5844xDPV_Vo10tp_Q`,
    text: "lol10",
  },
];

const Carousel = () => {
  const [page, setPage] = useState(0);
  const [curImages, setCurImages] = useState([]);
  const [enableButton, setEnableButton] = useState(true);

  useEffect(() => {
    var renderedImagesTmp = [];
    for (let i = 0; i < images.length; i++) {
      renderedImagesTmp.push({ ...images[i] });
    }
    setCurImages(renderedImagesTmp);
  }, []);

  const test = () => {
    console.log("heheahawd");
  };

  const nextPage = () => {
    if (page === images.length - 1) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  const renderHandler = () => {
    const imageWidth = 420;
    // 10% 20% 20% 20% 20% 10%
    // 10% 80% 10%
    // 100%
    return (
      <div className="relative h-full">
        <div className="absolute h-full flex w-screen">
          <div
            className="h-full z-10 carousel-border flex-1"
          />
          <div
            className="h-full z-10 flex-none"
            style={{ width: imageWidth }}
          />
          <div
            className="h-full z-10 carousel-border flex-1"
            style={{ transform: "rotate(180deg)"}}
          />
        </div>
        <div
          className="absolute bg-white h-full flex carousel"
          style={{
            left: `calc(50vw - ${imageWidth / 2}px)`,
            transform: `translateX(-${(page * 100) / images.length}%)`,
            width: `${images.length * imageWidth}px`,
          }}
        >
          {images.map((element, index) => {
            return (
              <div
                key={index}
                className="absolute h-full"
                style={{
                  width: `${100 / images.length}%`,
                  left: `${(index * 100) / images.length}%`,
                }}
              >
                <img
                  className="object-cover w-full h-full"
                  src={element.image}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const animationEndHandler = () => {
    setEnableButton(true);
  };

  return (
    <div className="w-full relative">
      <div
        className="w-full h-96 flex bg-no-repeat bg-repeat-x bg-[length:auto_24rem] py-16 overflow-hidden"
        style={{
          backgroundImage: `url(${movieReel})`,
        }}
      >
        <div
          className="bg-black relative"
          onAnimationEnd={() => {
            console.log("hehe");
          }}
        >
          <div className="relative w-full h-full absolute carousel-container">
            {renderHandler()}
          </div>
        </div>
      </div>
      <IconButton
        sx={{
          position: "absolute",
          zIndex: 20,
          left: 0,
          top: "50%",
        }}
        style={{
          transform: "translate(0,-50%)",
        }}
        aria-label="delete"
        size="large"
        onClick={prevPage}
      >
        <ChevronLeft style={{ color: "#FECA91" }} fontSize="inherit" />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          zIndex: 20,
          right: 0,
          top: "50%",
        }}
        style={{
          transform: "translate(0,-50%)",
        }}
        aria-label="delete"
        size="large"
        onClick={nextPage}
      >
        <ChevronRight style={{ color: "#FECA91" }} fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default Carousel;
