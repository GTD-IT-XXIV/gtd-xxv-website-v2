import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

import Logo from "./img/logo_white.png";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GTDLogo from "./img/logo_white.png";

const Active = "Home";

const Navbar = ({ routes }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-[#190F3E] px-5 py-2 flex justify-between items-center">
      <div className="lg:hidden">
        <MenuRoundedIcon
          className="text-white cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      <img src={GTDLogo} alt="logo" className="w-60" />

      <div className="text-white text-lg hidden lg:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "text-decoration-none p-3 nav-item" +
            (!isActive ? " text-white hover:text-[#FFEEB1]" : " text-[#FFEEB1]")
          }
          exact={true}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            "text-decoration-none p-3 nav-item" +
            (!isActive ? " text-white hover:text-[#FFEEB1]" : " text-[#FFEEB1]")
          }
          exact={true}
        >
          About Us
        </NavLink>

        <NavLink
          to="/committee"
          className={({ isActive }) =>
            "text-decoration-none p-3 nav-item" +
            (!isActive ? " text-white hover:text-[#FFEEB1]" : " text-[#FFEEB1]")
          }
          exact={true}
        >
          Our Committee
        </NavLink>

        <div className="group relative cursor-pointer p-3">
          <NavLink
            to="/events"
            className={({ isActive }) =>
              "text-decoration-none nav-item nav-item" +
              (!isActive
                ? " text-white hover:text-[#FFEEB1]"
                : " text-[#FFEEB1]")
            }
            exact={true}
          >
            Events
          </NavLink>
          <div className="hidden group-hover:flex flex-col fixed bg-[#2D2059] mt-3">
            <NavLink
              to="/pre_events"
              className={({ isActive }) =>
                "text-decoration-none p-3 hover:bg-[#483787] nav-item" +
                (!isActive
                  ? " text-white hover:text-[#FFEEB1]"
                  : " text-[#FFEEB1]")
              }
              exact={true}
            >
              Pre-Events
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/leaderboard"
          className={({ isActive }) =>
            "text-decoration-none p-3 nav-item" +
            (!isActive ? " text-white hover:text-[#FFEEB1]" : " text-[#FFEEB1]")
          }
          exact={true}
        >
          Leaderboard
        </NavLink>

        <NavLink
          to="/faq"
          className={({ isActive }) =>
            "text-decoration-none p-3 nav-item" +
            (!isActive ? " text-white hover:text-[#FFEEB1]" : " text-[#FFEEB1]")
          }
          exact={true}
        >
          Registration & FAQ
        </NavLink>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-[#2D2059] z-50">
          <div className="flex justify-end">
            <MenuRoundedIcon
              className="text-white cursor-pointer mt-4 mr-4"
              onClick={toggleSidebar}
            />
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "text-decoration-none p-2 nav-item" +
                (!isActive
                  ? " text-white hover:text-[#FFEEB1]"
                  : " text-[#FFEEB1]")
              }
              exact={true}
              onClick={toggleSidebar}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                "text-decoration-none p-2 nav-item" +
                (!isActive
                  ? " text-white hover:text-[#FFEEB1]"
                  : " text-[#FFEEB1]")
              }
              exact={true}
              onClick={toggleSidebar}
            >
              About Us
            </NavLink>

            <NavLink
              to="/committee"
              className={({ isActive }) =>
                "text-decoration-none p-2 nav-item" +
                (!isActive
                  ? " text-white hover:text-[#FFEEB1]"
                  : " text-[#FFEEB1]")
              }
              exact={true}
              onClick={toggleSidebar}
            >
              Our Committee
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                "text-decoration-none p-2 nav-item" +
                (!isActive
                  ? " text-white hover:text-[#FFEEB1]"
                  : " text-[#FFEEB1]")
              }
              exact={true}
              onClick={toggleSidebar}
            >
              Events
            </NavLink>

            <NavLink
              to="/pre_events"
              className={({ isActive }) =>
                "text-decoration-none p-2 nav-item" +
                (!isActive
                  ? " text-white hover:text-[#FFEEB1]"
                  : " text-[#FFEEB1]")
              }
              exact={true}
              onClick={toggleSidebar}
            >
              Pre-Events
            </NavLink>

            <NavLink
              to="/leaderboard"
              className={({ isActive }) =>
                "text-decoration-none p-2 nav-item" +
                (!isActive
                  ? " text-white hover:text-[#FFEEB1]"
                  : " text-[#FFEEB1]")
              }
              exact={true}
              onClick={toggleSidebar}
            >
              Leaderboard
            </NavLink>

            <NavLink
              to="/faq"
              className={({ isActive }) =>
                "text-decoration-none p-2 nav-item" +
                (!isActive
                  ? " text-white hover:text-[#FFEEB1]"
                  : " text-[#FFEEB1]")
              }
              exact={true}
              onClick={toggleSidebar}
            >
              FAQ & Registration
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
