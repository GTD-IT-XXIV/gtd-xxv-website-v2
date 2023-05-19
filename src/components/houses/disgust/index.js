import { useState } from "react";
import House from "../House";
import houses from "../houses";

const Disgust = () => {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(visible ? false : true);
  }

  return (
    <House house={ houses.disgust } />
  );
};

export default Disgust;

