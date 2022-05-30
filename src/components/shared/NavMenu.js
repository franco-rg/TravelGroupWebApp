import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { BreadcrumbsNavBar } from '../../router/routesNavBar';

const NavMenu = () => {
    const [toggle, setToggle] = useState(true);

    const toggleNavBar = () => {
        setToggle(!toggle);
    };

    const [ubicacionActual, setUbicacionActual] = useState(0);
    window.addEventListener('scroll', function () {
        setUbicacionActual(window.pageYOffset);
    });

    const pageItems = () => {
        return BreadcrumbsNavBar.map((item) =>
            <button key={item.id} className="hover:bg-gray-50 duration-300 transition-all w-full py-4 rounded-lg my-4">
                <div className="ml-2 overflow-hidden w-7"></div>
                <span className="uppercase links_name poppins text-gray-700">{item.name}</span>
            </button>
        );
    }

    return (
        <>
            {console.log(toggle)}
            <nav className={"slider bg-white z-50 rounded-xl top-0 left-0 text-white fixed shadow-beautiful transition-all duration-500 mx-4 ease-in-out ".concat(toggle ? "active my-4 h-96vh" : "my-10 h-88vh")}>
                <div className={toggle ? "absolute w-8 top-4 left-4 transition-opacity" : "fixed left-0 ml-1 top-8 bg-white rounded-sm px-1.5 shadow-beautiful"}>
                    <button
                        id="btnOpen"
                        onClick={() => {
                            toggleNavBar();
                        }}
                        className={"btn-openMenu sticky top-0 text-2xl cursor-pointer transition-all duration-75 ease-in-out ".concat((ubicacionActual > 50) ? "mostrarBtnNavbar" : "")}>
                        <FontAwesomeIcon
                            icon="fa-solid fa-bars"
                            className={"text-gray-600 transition-all duration-300 ".concat(toggle ? '' : 'text-xl')}
                        />
                    </button>
                </div>
                <ul className="overflow-hidden nav_list h-3/4 mt-20">
                    <li key="_1" className="py-5 opacity-90 m-4">
                        <button className="bg-gray-200 w-full py-4 rounded-lg">
                            <div className="ml-2 overflow-hidden w-7">
                                <FontAwesomeIcon icon="fa-solid fa-house" className="text-gray-700" />
                            </div>
                            <span className="uppercase links_name poppins text-gray-700">Inicio</span>
                        </button>
                        {BreadcrumbsNavBar ? pageItems() : <></>}
                    </li>
                </ul>
            </nav>
        </>
    );
};
export default NavMenu;