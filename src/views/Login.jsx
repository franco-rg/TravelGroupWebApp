import React, { useState } from "react";
import viaje from "../../src/assets/img/mujer-img.svg";
import logo from "../../src/assets/img/nombre.svg";
import { useNavigate } from "react-router-dom";
import { Form, Loader } from "rsuite";
import toast, { Toaster } from "react-hot-toast";
import loginProxy from "../proxy/login.proxy";

const Login = () => {
  let [loaderBtn, setLoaderBtn] = useState(false);

  const notify = () =>
    toast.promise(peticionPost(dataLogin), {
      loading: "Verificando credenciales...",
      success: <b>Logueo Exitoso!</b>,
      error: <b>Usuario o contraseña incorrectos.</b>,
    });
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    documentoOrEmailDTO: "",
    contrasenaDTO: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(dataLogin);
  };

  const peticionPost = async () => {
    await loginProxy.login(dataLogin).then((response) => {
      window.localStorage.setItem("userName", response.data.content.name);
      window.localStorage.setItem("role", response.data.content.authorities[0].authority);
      setTimeout(() => {
        response ? navigate("/inicio", { state: { super: 1 } }) : navigate("/");
      }, 2000);
    }).finally(()=> {
      setTimeout(()=> {
        setLoaderBtn(false);
      }, 800)
    });
  };

  const executeAlert = () => {
    setLoaderBtn(true);
    peticionPost();
    notify();
  };

  return (
    <div className="bg-no-repeat bg-fixed bg-cover h-screen w-full relative bg-gray-50">
      <div className="mx-2 sm:h-screen relative">
        <div className="flex flex-col h-full px-0 sm:px-2 lg:px-0 gap-3">
          <div className="sm:max-w-4xl mt-3 w-full m-auto">
            <div className="flex justify-between items-center">
              <img src={logo} className="w-24 h-20" />
            </div>
            <div
              className="grid grid-cols-2 rounded-lg overflow-hidden shadow-beautiful bg-white"
              style={{ height: "33rem" }}
            >
              <div
                className="p-10 flex"
                style={{ background: "rgb(205 230 223)" }}
              >
                <img src={viaje} />
              </div>
              <div className="m-4 sm:mt-auto p-10">
                <h5 className="text-left font-light text-xl text-gray-800 poppins">
                  Hola!
                  <br />
                  Comenzemos la aventura.
                </h5>
                <Form>
                  <div className="mb-8 mt-4">
                    <label
                      className="block text-gray-500 text-xs font-medium mb-1"
                      htmlFor="email"
                    >
                      Usuario
                    </label>
                    <input
                      className="border rounded-lg w-full py-2 px-3 text-gray-700 outline-none focus:border-gray-400"
                      type="email"
                      placeholder="Usuario"
                      name="documentoOrEmailDTO"
                      onChange={handleChange}
                      autoComplete="off"
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
                      name="contrasenaDTO"
                      type="password"
                      placeholder="Contraseña"
                      onChange={handleChange}
                    />
                  </div>
                  <hr className="mb-5" />
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      className="button_login poppins relative hover:bg-cherry-300 transition-all duration-200 text-white font-medium md:text-sm py-3 md:px-7 rounded focus:outline-none"
                      type="submit"
                      disabled={loaderBtn ? true : false}
                      onClick={executeAlert}
                      style={{ background: "#366A79" }}
                    >
                      {loaderBtn ? <Loader content="Procesando..." /> : "Inicia Sesión"}
                    </button>
                    <Toaster />
                  </div>
                </Form>
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
