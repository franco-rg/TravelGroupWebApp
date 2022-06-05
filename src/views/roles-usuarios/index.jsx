import React, { useState } from "react";
import Header from "../../components/shared/Header";
import ContainerViews from "../../components/shared/ContainerViews";
import Roles from "./roles";
import Usuarios from "./usuarios";

const RolesUsuario = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Header title="Roles y Usuarios" />
      <ContainerViews>
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Roles
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Usuarios
          </button>
        </div>
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Roles />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Usuarios />
          </div>
        </div>
      </ContainerViews>
    </>
  );
};
export default RolesUsuario;