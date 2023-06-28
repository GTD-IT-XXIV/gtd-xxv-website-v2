import { useState } from "react";
import movieReel from "../../../assets/img/home/movieReel.svg";

import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import "./carousel.css";

const imageWidth = 420;

const PageIndicator = ({ page, className, maxPage, setPage }) => {
  return (
    <div className={`flex flex-row justify-center items-center ${className}`}>
      {Array.from(Array(maxPage).keys()).map((element, index) => {
        return (
          <div
            key={index}
            className={`w-3 h-1 rounded-full mx-1 cursor-pointer ${
              page === index ? "current-page" : "bg-white"
            }`}
            onClick={() => setPage(index)}
          />
        );
      })}
    </div>
  );
};

const Text = ({ text, ...props }) => {
  return (
    <div className="w-full flex flex-row items-center justify-center" {...props}>
      <p className="w-5/6 md:w-3/6 font-white text-center">{text}</p>
    </div>
  );
};

const Carousel = ({ images }) => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page === images.length - 1) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  const goToPage = (page) => {
    setPage(page);
  };

  const renderHandler = () => {
    return (
      <div className="relative h-full">
        <div className="absolute h-full flex w-screen">
          <div className="h-full z-10 carousel-border flex-1" />
          <div
            className="h-full z-10 flex-none"
            style={{ width: imageWidth }}
          />
          <div
            className="h-full z-10 carousel-border flex-1"
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
        <div
          className="absolute h-full flex carousel"
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
                className="absolute h-full flex flex-row justify-center"
                style={{
                  width: `${100 / images.length}%`,
                  left: `${(index * 100) / images.length}%`,
                }}
              >
                <img
                  className="object-cover h-full"
                  src={element.image}
                  alt="storyline"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative">
      <div
        className="w-full h-72 md:h-96 relative flex bg-no-repeat bg-repeat-x bg-[length:auto_18rem] md:bg-[length:auto_24rem] py-12 md:py-16 overflow-hidden"
        style={{
          backgroundImage: `url(${movieReel})`,
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            zIndex: 20,
            left: 0,
            top: "50%",
          }}
          className="-translate-y-2/4"
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
          className="-translate-y-2/4"
          size="large"
          onClick={nextPage}
        >
          <ChevronRight style={{ color: "#FECA91" }} fontSize="inherit" />
        </IconButton>
        <div className="bg-black relative">
          <div className="relative w-full h-full absolute carousel-container">
            {renderHandler()}
          </div>
        </div>
      </div>

      <PageIndicator
        page={page}
        maxPage={images.length}
        className="my-3"
        setPage={goToPage}
      />
      <Text text={images[page].text} />
    </div>
  );
};

export default Carousel;
