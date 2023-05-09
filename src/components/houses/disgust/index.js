import { useState } from "react";
import "./disgust.css";

const Disgust = () => {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(visible ? false : true);
  }

  return (
    <>
      <div className="disgust">
        <div className="navigationContainer">
          <p className="text-6xl text-red-500">Disgust</p>
        </div>
      </div>
    </>
  );
};

export default Disgust;
