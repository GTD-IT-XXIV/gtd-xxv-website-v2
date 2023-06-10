import { useState } from "react";

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
          className={`absolute rounded-t-[25px] lg:rounded-t-[50px] w-11/12 lg:w-5/6 h-[150px] z-10 bottom-0 pt-2 ${
            hover ? `bg-[#370615]` : "chair-bg"
          } ${orientation} ${middleClassName}`}
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

  export default Chair;