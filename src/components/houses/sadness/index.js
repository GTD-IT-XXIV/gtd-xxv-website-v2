import House from "../House";
import houses from "../houses";
import { useEffect } from "react";
const Sadness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <House house={houses.sadness} />;
};

export default Sadness;
