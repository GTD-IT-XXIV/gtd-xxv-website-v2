// import House from "../House";
// import houses from "../houses";

// const Anger = () => {
//   return <House house={houses.anger} />;
// };

// export default Anger;

import React, { useEffect } from "react";
import House from "../House";
import houses from "../houses";
const Anger = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <House house={houses.anger} />;
};

export default Anger;
