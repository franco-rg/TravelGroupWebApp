import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/shared/Header";
import ContainerViews from "../../components/shared/ContainerViews";
import logo from "../../assets/img/nombre.svg";

const Home = () => {
  return (
    <>
      <Header title="Empresas" />
      <ContainerViews>
        Seccion Empresas
      </ContainerViews>
    </>
  );
};
export default Home;
