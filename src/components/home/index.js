import { useState } from "react";
import "./home.css";

const Home = () => {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(visible ? false : true);
  }

  return (
    <>
      <div className="home">
        <div className="navigationContainer">
          <p className="text-6xl text-red-500">Home</p>
        </div>
      </div>
    </>
  );
};

export default Home;
