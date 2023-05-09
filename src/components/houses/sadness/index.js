import { useState } from "react";
import "./sadness.css";

const Sadness = () => {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(visible ? false : true);
  }

  return (
    <>
      <div className="sadness">
        <div className="navigationContainer">
          <p className="text-6xl text-red-500">sadness</p>
        </div>
      </div>
    </>
  );
};

export default Sadness;
