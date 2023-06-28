import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Carousel from "./carousel";

const Modal = ({images, title, date, open = false, onClickClose}) => {
  const imageArray = images.map((element) => element.image)
  const textArray = images.map((element) => element.text)

  const [page, setPage] = useState(0);
useEffect(() => {setPage(0)}, [open])

  return (
    <div className="fixed w-full h-full z-20 left-0 top-0" style={{display: (open?'block':'none')}}>
      <div className="relative w-full h-full">
        <div className="w-full h-full absolute bg-black z-40 opacity-80" onClick={onClickClose}/>
        <div className="absolute relative top-2/4 left-2/4 bg-[#FFC5C0] w-[400px] h-[600px] flex z-50 p-8 -translate-x-2/4 -translate-y-2/4 rounded-3xl flex flex-column gap-2">
        <IconButton
          sx={{
            position: "absolute",
            zIndex: 20,
            right: '0.5rem',
            top: '0.5rem',
          }}
          size="large"
          onClick={onClickClose}
        >
          <CloseIcon style={{ color: "#6F0F2B" }} fontSize="inherit" />
        </IconButton>
          <h1 className="font-inside-out text-modal">{title}</h1>
          <p className="text-modal font-bold">{date}</p>
          <Carousel images={imageArray} className="w-[calc(100%+4rem)] -mx-8 min-h-64 h-64" style={{minHeight:'16rem'}} onPageChange={(x) => setPage(x)} open={open} />
          <p className="text-modal">{textArray[page]}</p>
        </div>

      </div>
    </div>
  );
};

export default Modal;
