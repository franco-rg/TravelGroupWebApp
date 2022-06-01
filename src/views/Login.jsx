import React from "react";
import viaje from "../../src/assets/img/login-img.svg";
import logo from "../../src/assets/img/nombre.svg";

const Login = () => {
  return (
    <div
      className="bg-no-repeat bg-fixed bg-cover h-screen w-full relative bg-gray-50"
    >
      <div className="mx-2 sm:h-screen relative">
        <div className="flex flex-col h-full px-0 sm:px-2 lg:px-0 gap-3">
          <div className="sm:max-w-4xl mt-3 w-full m-auto">
            <div className="flex justify-between items-center">
              <img src={logo} className="w-24 h-20" />
              <button className="poppins bg-gray-100 text-sm text-white px-8 py-2 rounded-md border" style={{background: '#596966'}}>Regístrate</button>
            </div>
            <div
              className="grid grid-cols-2 rounded-lg overflow-hidden shadow-beautiful bg-white"
              style={{ height: "33rem" }}
            >
              <div className="p-10 flex" style={{ background: "#BAD1CD" }}>
                <img src={viaje} />
              </div>
              <div className="m-4 sm:mt-auto p-10">
                <h5 className="text-left font-light text-xl text-gray-800 poppins">
                  Hola!
                  <br />
                  Comenzemos la aventura.
                </h5>
                <form>
                  <div className="mb-8 mt-4">
                    <label
                      className="block text-gray-500 text-xs font-medium mb-1"
                      htmlFor="email"
                    >
                      Usuario
                    </label>
                    <input
                      className="border rounded-lg w-full py-2 px-3 text-gray-700 outline-none focus:border-gray-400"
                      id="username"
                      type="email"
                      placeholder="Usuario"
                      name="email"
                    />
                  </div>
                  <div className="mb-10 sm:mb-16">
                    <label
                      className="block text-gray-500 text-xs font-medium mb-1"
                      htmlFor="password"
                    >
                      Contraseña
                    </label>
                    <input
                      className="border rounded-lg w-full py-2 px-3 text-gray-700 outline-none focus:border-gray-400"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Contraseña"
                    />
                  </div>
                  <hr className="mb-5" />
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      className="button_login relative hover:bg-cherry-300 transition-all duration-200 text-white font-bold text-base md:text-sm py-3 md:px-7 rounded focus:outline-none"
                      type="submit"
                      style={{ background: "#BAD1CD" }}
                    >
                      <span className="button_login_text">Inicia Sesión</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bottom-8 left-0 right-0 flex justify-center my-3">
            <p>Creado por AAFF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
