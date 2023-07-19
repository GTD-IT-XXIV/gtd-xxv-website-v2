import House from "../House";
import houses from "../houses";
import { useEffect } from "react";
const Fear = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <House house={houses.fear} />;
};

export default Fear;
