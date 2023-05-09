import { useState } from "react";
import "./anger.css";

const Anger = () => {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(visible ? false : true);
  }

  return (
    <>
      <div className="anger">
        <div className="navigationContainer">
          <p className="text-6xl text-red-500">Anger</p>
        </div>
      </div>
    </>
  );
};

export default Anger;
