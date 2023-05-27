import React from "react";

import Orang from "./img/orang.png";

import LinkedinIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center p-3"
        style={{
          "backgroundColor": "#190F3E",
        }}
      >
        <img
          src={Orang}
          alt="orang"
          style={{
            width: "100px",
            height: "auto",
          }}
        />
        <div>
          <p className="normalfont text-center text-white m-0">
            Copyright © 2023 GTD XXV.
          </p>
          <p className="normalfont text-center text-white m-0">
            All Rights Reserved.
          </p>
        </div>
        <div
          className="d-flex justify-content-center text-white"
          style={{
            width: "100px",
          }}
        >  
          <InstagramIcon
            sx={{ fontSize: 40 }}
            onClick={(event) =>
              (window.location.href =
                "https://www.instagram.com/pintugtd/?hl=en")
            }
          />
          <LinkedinIcon
            sx={{ fontSize: 40 }}
            onClick={(event) =>
              (window.location.href =
                "https://www.linkedin.com/company/pintu-gtd/about/")
            }
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
