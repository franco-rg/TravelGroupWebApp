import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const NavMenu = () => {
  const [toggle, setToggle] = useState(true);

  const toggleNavBar = () => {
    setToggle(!toggle);
  };

  const [ubicacionActual, setUbicacionActual] = useState(0);
  window.addEventListener('scroll', function () {
    setUbicacionActual(window.pageYOffset);
  })

  return (
    <>
      <nav className={"slider bg-white m-4 z-50 rounded-xl top-0 left-0 text-white fixed shadow-beautiful transition-all duration-300 ease-in-out active".concat(toggle ? "" : "active")}>
        <div className={toggle ? "absolute w-8 top-4 left-4" : "fixed left-2 top-8"}>
          <button
            id="btnOpen"
            onClick={() => {
              toggleNavBar();
            }}
            className={"btn-openMenu sticky top-0 text-2xl cursor-pointer transition-all duration-75 ease-in-out ".concat((ubicacionActual > 50) ? "mostrarBtnNavbar" : "")}>
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              className="text-gray-600 transition-all duration-300"
            />
          </button>
        </div>
        <ul className="overflow-hidden nav_list h-3/4 mt-20">
          <li
            key="_1"
            className="py-5 cursor-pointer opacity-90 m-4">
            <button className="bg-gray-100 w-full py-4 rounded-lg">
              <div className="ml-2 overflow-hidden w-7">
                <FontAwesomeIcon icon="fa-solid fa-house" className="text-gray-700" />
              </div>
              <span className="uppercase links_name poppins text-gray-700">Inicio</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavMenu;