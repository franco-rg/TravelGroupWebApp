import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../../assets/img/logoynombre.svg";

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
      <nav
        className={"slider bg-white m-4 z-50 rounded-xl top-0 left-0 text-white fixed shadow-beautiful transition-all duration-300 ease-in-out active".concat(
          toggle ? "" : "active"
        )}
      >
        {/* <div className="flex justify-center flex justify-center bg-gray-100 mt-20" style={{ height: "4rem" }}>
          <a href="/">
            <img
              className="min-w-full my-3"
              alt="logo_img"
              src={logo}
              style={{ maxWidth: "140px" }}
            />
          </a>
        </div> */}
        <div className="absolute w-8 top-4 left-4">
          <button
            id="btnOpen"
            onClick={() => {
              toggleNavBar();
            }}
            className={"btn-openMenu sticky top-0 text-2xl cursor-pointer transition-all duration-75 ease-in-out ".concat((ubicacionActual > 50) ? "mostrarBtnNavbar" : "")}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              className="text-gray-600 transition-all duration-300"
            />
            {/* <FontAwesomeIcon
              icon="fa-solid fa-xmark"
              id="btnOpen"
              className="absolute flex text-gray-600 mx-1 transition-all duration-300 top-2"
            /> */}
          </button>
        </div>
        <ul className="overflow-hidden nav_list h-3/4 mt-20">
          <li
            key="_1"
            className="py-5 cursor-pointer opacity-90 m-4"
          // onClick={() => {
          //   handleClick("/");
          // }}
          >
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
