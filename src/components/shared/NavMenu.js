import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import Dropdown from "./DropdownUser";

const NavMenu = () => {
  const [toggle, setToggle] = useState(true);
  const [menuLateral, setMenuLateral] = useState([]);

  const toggleNavBar = () => {
    setToggle(!toggle);
  };

  const [ubicacionActual, setUbicacionActual] = useState(0);
  window.addEventListener('scroll', function () {
    setUbicacionActual(window.pageYOffset);
  })

  return (
    <>
      <div className="relative px-2 bg-menu" style={{ height: "4.2rem" }}>
        <div className="h-full px-2 m-auto md:px-8 lg:px-10">
          <div className="flex items-center justify-end h-full">
            <Dropdown />
          </div>
        </div>
      </div>

      <nav
        className={"slider z-50 top-0 left-0 text-white fixed shadow-xl transition-all duration-300 ease-in-out active".concat(
          toggle ? "" : "active"
        )}
      >
        <div
          className="relative flex justify-center py-1 logo bg-menu"
          style={{ height: "4.2rem" }}
        >
          <a href="/">
            <img
              className="min-w-full py-1"
              alt="logo_img"
              style={{ maxWidth: "140px" }}
            />
          </a>
        </div>
        <div className="absolute w-8 top-4 -right-12">
          <button
            id="btnOpen"
            onClick={() => {
              toggleNavBar();
            }}
            className={"btn-openMenu sticky top-0 text-2xl cursor-pointer transition-all duration-75 ease-in-out ".concat((ubicacionActual > 50) ? "mostrarBtnNavbar" : "")}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              id="btnClose"
              className="text-gray-100 transition-all duration-300"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-xmark"
              id="btnOpen"
              className="absolute flex text-gray-100 transition-all duration-300 top-2"
            />
          </button>
        </div>
        <ul className="overflow-hidden nav_list h-3/4">
          <li
            key="_1"
            className="py-5 pl-5 cursor-pointer hover:bg-gray-700 opacity-90"
            // onClick={() => {
            //   handleClick("/");
            // }}
          >
            <button>
              <div className="ml-2 overflow-hidden w-7">
                <FontAwesomeIcon icon="fa-solid fa-house" />
              </div>
              <span className="uppercase links_name poppins">Inicio</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavMenu;
