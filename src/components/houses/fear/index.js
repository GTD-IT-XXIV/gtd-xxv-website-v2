import { useState } from "react";
import "./fear.css";

const Fear = () => {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(visible ? false : true);
  }

  return (
    <>
      <div className="fear">
        <div className="navigationContainer">
          <p className="text-6xl text-red-500">Fear</p>
        </div>
      </div>
    </>
  );
};

export default Fear;
