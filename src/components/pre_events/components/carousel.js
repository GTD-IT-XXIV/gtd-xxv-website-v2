import { useReducer, useRef, useEffect } from "react";
import { IconButton } from "@mui/material";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Carousel = ({ className, images, onPageChange, style, open }) => {

  const defaultState = { currentPage: 0, currentAction: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "next":
        if (state.currentAction === 0) {
          onPageChange((state.currentPage + 1) % images.length);
          return { ...state, currentAction: 1 };
        }
        break;
      case "prev":
        if (state.currentAction === 0) {
          onPageChange((state.currentPage - 1 + images.length) % images.length);
          return { ...state, currentAction: -1 };
        }
        break;
      case "endAnimation":
        return {
          ...state,
          currentPage:
            (state.currentPage + state.currentAction + images.length) %
            images.length,
          currentAction: 0,
        };
      case "reset":
        return defaultState;
      default:
        return state;
    }
    return state;
  };

  const sliderImageRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log(state);

  const nextPage = () => {
    dispatch({ type: "next" });
  };

  const prevPage = () => {
    dispatch({ type: "prev" });
  };

  const endAnimation = () => {
    dispatch({ type: "endAnimation" });
  };

  useEffect(() => {
    sliderImageRef.current.addEventListener("transitionend", endAnimation);
  }, []);

  useEffect(() => {
    dispatch({ type: "reset" })
  }, [open])

  return (
    <div
      className={`${className} bg-black relative overflow-hidden`}
      style={style}
    >
      <div
        className={`absolute flex flex-row w-[300%] h-64 ${
          state.currentAction !== 0 ? "transition duration-500" : ""
        }`}
        style={{
          transform: `translateX(-${(100 + state.currentAction * 100) / 3}%)`,
        }}
        ref={sliderImageRef}
      >
        <img
          className="w-2/6 h-full object-contain"
          height="100%"
          src={images[(state.currentPage - 1 + images.length) % images.length]}
        />
        <img
          className="w-2/6 h-full object-contain"
          height="100% "
          src={images[state.currentPage % images.length]}
        />
        <img
          className="w-2/6 h-full object-contain"
          height="100%"
          src={images[(state.currentPage + 1) % images.length]}
        />
      </div>
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
        <ChevronLeft style={{ color: "white" }} fontSize="inherit" />
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
        <ChevronRight style={{ color: "white" }} fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default Carousel;
