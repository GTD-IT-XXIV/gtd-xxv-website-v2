import { useState } from "react";
import "./index.css";
import Card from "./Card.js";
import PolaroidGrid from "./PolaroidGrid.js";
import Folder from "./Folder.js";
import data from "./data/data.json";

const Committee = () => {
  const [cardState, setCardState] = useState({
    visible: false,
    image: "",
    name: "",
    nickname: "",
    major: "",
  });

  return (
    <div className="committee">
      <Card cardState={cardState} setCardState={setCardState} />
      {cardState.visible && (
        <div
          className="overlay"
          onClick={() => setCardState({ visible: false })}
        />
      )}

      <div
        className="navigationContainer m-4"
        style={{ fontFamily: "InsideOut" }}
      >
        <p className="title mt-5 mb-0"> Our committee </p>

        <div className="tops m-5 mt-5" style={{ color: "white" }}>
          <p className="tops-heading m-4"> Tops </p>

          <PolaroidGrid
            polaroids={data.filter((item) => item.role === "Tops")}
            setCardState={setCardState}
          />
        </div>

        <div className="non-tops m-5">
          <Folder data={data} setCardState={setCardState} />
        </div>
      </div>
    </div>
  );
};

export default Committee;
