import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

const Dropdown = () => {

    return (
        <div>
            <div className="relative inline-block text-left">
                <div className="flex items-center">
                    <button type="button" className="font-medium cursor-pointer text-white justify-center w-full px-4 py-2" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <FontAwesomeIcon icon="fa-solid fa-angle-down" className='pl-4' />
                    </button>
                </div>

                <div className="origin-top-right absolute right-0 w-72 rounded-md shadow-lg bg-menu focus:outline-none z-40 mt-6" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-4 flex flex-col items-start gap-y-3 px-6 z-50" role="none">
                        <button className="text-gray-100 font-semibold poppins block text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">Ir al indice de Módulos</button>
                        <button className="text-gray-100 font-semibold poppins block text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-1">Cambiar Contraseña</button>
                        <button className="text-gray-100 font-semibold poppins block text-sm opacity-80 cursor-pointer hover:opacity-100 hover:transition-all duration-300" role="menuitem" tabIndex="-1" id="menu-item-2">Cerrar Sesión</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;