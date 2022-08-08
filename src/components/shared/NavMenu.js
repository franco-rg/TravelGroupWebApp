import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import routes from '../../router/routesNavBar';
import { useNavigate } from "react-router-dom";
import useCollapse from "react-collapsed";

const NavMenu = () => {
    const [toggle, setToggle] = useState(true);
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    const navigate = useNavigate();
    const [color, setColor] = useState("duration-300 transition-all w-full py-4 rounded-lg my-4")

    const toggleNavBar = () => {
        setToggle(!toggle);
    };

    const [ubicacionActual, setUbicacionActual] = useState(0);
    window.addEventListener('scroll', function () {
        setUbicacionActual(window.pageYOffset);
    });

    const handleClick = (path) => {
        navigate(path);
        setColor("duration-300 transition-all w-full py-4 rounded-lg my-4")
    }

    const pageItems = () => {
        return routes.BreadcrumbsNavBar.map((item) =>
            <button key={item.id} onClick={() => handleClick(item.path)}
                className={color}>
                <div className="ml-2 overflow-hidden w-7"></div>
                <span className="uppercase links_name poppins text-gray-700 font-medium">{item.name}</span>
            </button>
        );
    }

    return (
        <>
            <nav className={"slider z-50 rounded-xl top-0 left-0 text-white fixed shadow-beautiful transition-all duration-500 mx-4 ease-in-out ".concat(toggle ? "active my-4 h-96vh" : "my-10 h-88vh")} style={{ background: "#7BCFD7" }}>
                <div className={toggle ? "absolute w-8 top-4 left-4 transition-opacity" : "fixed left-0 ml-1 top-8 bg-white rounded-sm px-1.5 shadow-beautiful"}>
                    <button
                        id="btnOpen"
                        onClick={() => {
                            toggleNavBar();
                        }}
                        className={"btn-openMenu sticky top-0 text-2xl cursor-pointer transition-all duration-75 ease-in-out ".concat((ubicacionActual > 50) ? "mostrarBtnNavbar" : "")}>
                        <FontAwesomeIcon
                            icon="fa-solid fa-bars"
                            className={"text-white transition-all duration-300 ".concat(toggle ? '' : 'text-xl text-gray-600')}
                        />
                    </button>
                </div>
                <ul className="overflow-hidden nav_list mt-20" style={{ height: '95%' }}>
                    <li key="_1" className="py-5 m-4">
                        <button className="w-full py-4 rounded-lg" onClick={() => navigate(`/inicio`)} style={{ background: '#F2F2F2' }}>
                            <div className="ml-2 overflow-hidden w-7">
                                <FontAwesomeIcon icon="fa-solid fa-house" className="text-gray-600" />
                            </div>
                            <span className="uppercase links_name poppins text-white font-medium text-gray-800">Inicio</span>
                        </button>

                        <>
                            <button {...getToggleProps()} className={color + ' pl-12'}>
                                <span style={{ paddingLeft: '3px' }} className="uppercase links_name poppins text-gray-700 font-medium">Mantenimientos</span>
                                <div className="ml-2 overflow-hidden w-7">
                                    {isExpanded ? <FontAwesomeIcon icon="fa-solid fa-angle-up" className="text-gray-500" /> : 
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" className="text-gray-500" />}
                                </div>
                            </button>
                        </>

                        <ul className="collapse">
                            <li key="_1" {...getCollapseProps()} className="mt-2 ml-6 mr-4 flex flex-col">
                                {routes.BreadcrumbsSubNavBar.map((item) =>
                                    <button key={item.id} className="w-full py-3 rounded-md mb-2" onClick={() => handleClick(item.path)}>
                                        <div className="ml-2 overflow-hidden w-7"></div>
                                        <span className="uppercase links_name poppins text-gray-700 font-medium">{item.name}</span>
                                    </button>
                                )}
                            </li>
                        </ul>
                        {routes.BreadcrumbsNavBar ? pageItems() : <></>}
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavMenu;