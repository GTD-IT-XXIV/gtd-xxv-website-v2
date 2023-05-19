import { useState } from "react";
import House from "../House";
import houses from "../houses";

const Anger = () => {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(visible ? false : true);
  }

  return (
    <House house={ houses.anger } />
  );
};

export default Anger;
