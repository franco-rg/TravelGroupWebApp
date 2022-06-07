import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import logoutProxy from '../../proxy/logout.proxy';

const Dropdown = () => {
    const [showOptions, setShowOptions] = useState(false);

    const handleClick = () => {
        setShowOptions(!showOptions);
    };

    const navigate = useNavigate();

    // const logout = () => {
    //     logoutProxy.logout().then((result) => {
    //         console.log(result);
    //     });
    // };

    return (
        <div>
            <div className="relative inline-block text-left">
                <div className="flex items-center">
                    <button type="button" onClick={handleClick} className="cursor-pointer bg-gray-100 rounded-md justify-center w-10 h-10" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <FontAwesomeIcon icon="fa-solid fa-user" className='text-gray-300 text-xl' />
                    </button>
                </div>
                {showOptions &&
                    (
                        <div className={"absolute w-64 py-10 opacity-0 rounded-xl shadow-md bg-white focus:outline-none z-40 mt-8 transition-all duration-300 ease-in-out ".concat(showOptions ? "opacity-100" : "")} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" style={{ right: '-2.8rem' }}>
                            <div className="w-full flex flex-col items-center gap-2 pb-4">
                                <button type="button" className="cursor-pointer rounded-md justify-center w-10 h-10" id="menu-button" aria-expanded="true" aria-haspopup="true" style={{ background: "#BAD1CD" }}>
                                    <FontAwesomeIcon icon="fa-solid fa-user" className='text-white text-xl' />
                                </button>
                                <label>USUARIO USUARIO</label>
                            </div>
                            <div className="py-2 flex flex-col items-start gap-y-3 px-6 z-50" role="none">
                                <button className="text-gray-500 font-medium poppins block text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">Opciones de Perfil</button>
                                <button onClick={() => navigate("/")} className="text-gray-500 font-medium poppins block text-sm opacity-80 cursor-pointer hover:opacity-100 hover:transition-all duration-300" role="menuitem" tabIndex="-1" id="menu-item-2">Cerrar Sesión</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Dropdown;