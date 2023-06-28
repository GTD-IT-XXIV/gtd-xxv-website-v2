import { useState } from "react";
import "./chair.css";
import { Link } from "react-router-dom";

const Chair = ({ text, orientation, topClassName, middleClassName, route }) => {
  return (
    <a href={route} className="chair-group relative w-4/12">
      <div
        className={`absolute chair-bg rounded-t-[25px] lg:rounded-t-[50px] w-10/12 lg:w-4/6 h-[140px] md:h-[200px] bottom-0 ${orientation} ${topClassName}`}
      />
      <div
        className={`absolute rounded-t-[25px] lg:rounded-t-[50px] w-11/12 lg:w-5/6 h-[105px] md:h-[150px] z-10 bottom-0 pt-2 hover-effect
           ${orientation} ${middleClassName}`}
      >
        <h1 className="text-white" style={{ fontFamily: "InsideOut" }}>
          {text}
        </h1>
      </div>
      <div
        className={`absolute chair-bg rounded-t-[25px] lg:rounded-t-[50px] w-full h-[60px] md:h-[90px] z-20 bottom-0 ${orientation}`}
      />
    </a>
  );
};

export default Chair;
