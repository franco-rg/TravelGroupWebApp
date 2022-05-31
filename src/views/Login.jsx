import React from "react";
import logo from "../../src/assets/img/login-img.svg";

const Login = () => {
  return (
    <div className="bg-no-repeat bg-fixed bg-cover h-screen w-full relative bg-gray-50">
      <div className="mx-2 sm:h-screen relative">
        <div className="flex flex-col h-full px-0 sm:px-2 lg:px-0 gap-3">
          <div className="sm:max-w-4xl mt-3 md:mt-auto w-full flex flex-col sm:flex-row m-auto bg-white rounded-lg overflow-hidden shadow-beautiful" style={{height: '33rem'}}>
            <div className="w-96 p-10 flex " style={{ background: "#BAD1CD" }}>
                <img src={logo} />
            </div>
            <div className="sm:w-72 mt-4 sm:mt-auto">
              <h5 className="text-center font-semibold text-xl text-gray-800 poppins">
                Inicia Sesión
              </h5>
              <form>
                <div className="mb-4 mt-4">
                  <label
                    className="block text-gray-500 text-sm font-bold mb-1"
                    htmlFor="email"
                  >
                    Usuario
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 outline-none focus:border-gray-400"
                    id="username"
                    type="email"
                    placeholder="Usuario"
                    name="email"
                  />
                </div>
                <div className="mb-10 sm:mb-16">
                  <label
                    className="block text-gray-500 text-sm font-bold mb-1"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 outline-none focus:border-gray-400"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                  />
                </div>
                <hr className="mb-5" />
                <div className="grid grid-cols-1 gap-2">
                  <button
                    className="button_login relative bg-cherry-200 hover:bg-cherry-300 transition-all duration-200 text-white font-bold text-base md:text-sm py-3 md:px-7 rounded focus:outline-none"
                    type="submit"
                  >
                    <span className="button_login_text">Acceder</span>
                  </button>
                  <button className="flex justify-center bg-none hover:bg-gray-200 transition ease-in-out duration-300 items-center text-gray-900 font-bold text-base md:text-sm py-3 md:py-2 md:px-7 rounded">
                    {" "}
                    <img
                      src="img/google-icon.png"
                      className="w-5 h-5"
                      alt="google_logo"
                    />{" "}
                    &nbsp;Google{" "}
                  </button>
                </div>
              </form>
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