import { useEffect, useState } from "react";
import movieReel from "../../../assets/img/home/movieReel.svg";
import inside_out from "../../../assets/img/home/inside_out.png";

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
  const [renderedImages, setRenderedImages] = useState([]);
  const [enableButton, setEnableButton] = useState(true);

  useEffect(() => {
    var renderedImagesTmp = [];
    for (let i = -3; i <= 3; i++) {
      let curIndex = (i + images.length) % images.length;
      renderedImagesTmp.push({ ...images[curIndex], index: curIndex });
    }
    setRenderedImages(renderedImagesTmp);
  }, []);

  const test = () => {
    console.log('heheahawd')
  }

  const nextPage = () => {
    if (!enableButton) return;
    setEnableButton(false);
    setPage((page + 1) % images.length);
    setRenderedImages([
      ...renderedImages.slice(1),
      {
        ...images[(page + 4) % images.length],
        index: (page + 4) % images.length,
      },
    ]);
  };

  const animationEndHandler = () => {
    setEnableButton(true);
  };

  return (
    <div
      className="w-full h-96 flex bg-no-repeat bg-repeat-x bg-[length:auto_24rem] py-16"
      style={{
        backgroundImage: `url(${movieReel})`,
      }}
      onClick={nextPage}
    >
      <div className="bg-black flex-auto flex flex-row relative">
        <div
          className="relative w-full absolute carousel-container"
          
        >
          {renderedImages.map((element, index) => {
            return (
              <div
                key={element.index}
                className="absolute h-full w-1/5 carouselimg"
                style={{ left: `${(index - 1) * 20}%` }}
                onAnimationEnd={index===3?animationEndHandler:null}
              >
                <img src={element.image} className="w-full h-full" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
