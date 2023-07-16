import { useEffect } from "react";
import House from "../House";
import houses from "../houses";

const Disgust = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <House house={houses.disgust} />;
};

export default Disgust;
