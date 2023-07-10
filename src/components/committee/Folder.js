import { useState, useEffect } from "react";
import "./Folder.css";
import PolaroidGrid from "./PolaroidGrid";
import TabList from "./TabList";

const Folder = ({ data, setCardState }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    if (activeTab === 0)
      setCurrentData(data.filter((item) => item.team === "POLOG"));
    else if (activeTab === 1)
      setCurrentData(data.filter((item) => item.team === "PPIT"));
    else if (activeTab === 2)
      setCurrentData(data.filter((item) => item.team === "BFM"));
    else if (activeTab === 3)
      setCurrentData(data.filter((item) => item.team === "WELFARE"));
    else if (activeTab === 4)
      setCurrentData(data.filter((item) => item.team === "GL"));
  }, [data, activeTab]);

  return (
    <>
      <div className="tablist">
        <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="folder">
        <div className="main-comm m-3 mb-5">
          <p className="heading m-3"> Main committee </p>
          <PolaroidGrid
            polaroids={currentData.filter((item) => item.role === "Main")}
            setCardState={setCardState}
          />
        </div>
        <div className="border-line"> </div>
        <div className="sub-comm m-3 mb-5">
          <p className="heading m-3"> Sub committee </p>
          <PolaroidGrid
            polaroids={currentData.filter((item) => item.role === "Sub")}
            setCardState={setCardState}
          />
        </div>
      </div>
    </>
  );
};

export default Folder;
