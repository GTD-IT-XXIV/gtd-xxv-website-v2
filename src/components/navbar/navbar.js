import React, { useState } from "react";

import Logo from "./img/logo_white.png";
// import Logo from "../../logo.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Menu = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about/",
  },
  {
    label: "Our Committee",
    path: "/committee/",
  },
  {
    label: "Events",
    path: "/events/",
  },
  {
    label: "Pre-Events",
    path: "/pre_events/",
  },
  {
    label: "Leaderboard",
    path: "/leaderboard/",
  },
  {
    label: "FAQ",
    path: "/faq/",
  },
];

// The active page can be retrieved using React's router API methods
const Active = "Home";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="navbar navbar-expand-lg rounded-bottom-5 shadow px-3"
      style={{
        "background-color": "#0C457A",
      }}
    >
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "250px",
          height: "auto",
        }}
      ></img>

      <div
        className="navbar-toggler border-0 text-white me-3 p-2"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuRoundedIcon />
      </div>

      <div
        className={`collapse navbar-collapse ${
          isOpen ? "show" : ""
        } justify-content-end`}
      >
        <ul className="navbar-nav p-3">
          {Menu.map((e) => (
            <li
              className={
                "nav-item text-white" + (e.label === Active ? " active" : "")
              }
              key={e.label}
            >
              <a
                href={e.path}
                className={"nav-link text-white"}
                style={{ fontSize: "20px", fontFamily: "InsideOut" }}
              >
                {e.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
