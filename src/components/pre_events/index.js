import "./pre_events.css";
import Television from "./components/television";
import { useState } from "react";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import { Button } from "@mui/material";

import images from "./images.json";
import Modal from "./components/modal";

const PreEvents = () => {
  const [modalIndex, setModalIndex] = useState(null);
  // title
  // date
  // previewImage
  // images: {image, text}

  // to be added = modal images, title, date when click different button

  return (
    <div className="events home relative">
      <div className={`navigationContainer`}>
        <Modal
          images={modalIndex !== null ? images[modalIndex].images : []}
          description={modalIndex !==null ? images[modalIndex].description: []}
          open={modalIndex !== null}
          onClickClose={() => setModalIndex(null)}
          title={modalIndex !== null ? images[modalIndex].title : ""}
          date={modalIndex !== null ? images[modalIndex].date : ""}
        />

        <div className="p-5 flex flex-column items-center gap-4">
          <h1 className="font-inside-out text-white text-4xl md:text-5xl">Pre-Event</h1>
          {images.map((image, index) => {
            return (
              <Television className="w-5/6 md:w-[40%] max-w-md flex" key={index}>
                <div className="flex flex-column items-center justify-center absolute z-10 image-cover bg-black w-full h-full gap-2 md:gap-8">
                  <PedalBikeIcon
                    sx={{ width: 0.5, height: 0.5, color: "yellow" }}
                  /> 
                  {/*^^^ To be replace later ^^^*/}
                  <Button
                    variant="outlined"
                    sx={{
                      width: 0.8,
                      height: 0.1,
                      color: "white",
                      borderColor: "white",
                      borderWidth: "0.125rem",
                      borderRadius: "9999px",
                      paddingY: "1rem",
                      "&:hover": { borderColor: "#FBA6CC" },
                    }}
                    onClick={() => setModalIndex(index)}
                  >
                    <p className="text-xs m-0">More info</p>
                  </Button>
                </div>
                <div
                  className="w-full h-full bg-contain"
                  style={{
                    background: `url(${image.previewImage})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </Television>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default PreEvents;
