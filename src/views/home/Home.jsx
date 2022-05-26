import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/shared/Header";
import DateTime from "./DateTime";
import ContainerViews from "../../components/shared/ContainerViews";
import logo from "../../assets/img/nombre.svg";

const Home = () => {
  return (
    <>
      <Header title="Menú principal" />
      <ContainerViews>
        <div
          className="grid grid-cols-11 sm:grid-cols-12 container m-auto gap-5 active mb-5"
          id="home"
          data-tab-content
        >
          <div className="col-span-5">
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="bg-gray-100 px-4 py-2 border">
                <p className="text-xs text-gray-800 font-medium">
                  Bienvenido(a)
                </p>
                <h1 className="poppins text-lg">Username</h1>
              </div>
              <div
                className="h-48 flex justify-center items-center"
                style={{ background: "#BAD1CD" }}
              >
                <img
                  className="min-w-full p-28"
                  src={logo}
                  alt="logo_img"
                  style={{ minWidth: "70px", minHeight: "20px" }}
                />
              </div>
            </div>
          </div>
          <div className="flex-wrap gap-10">
            <div className="relative w-80 mb-8 bg-gray-100 rounded-xl h-28 flex justify-center items-center gap-3">
              <div className="left-8 absolute">
                <DateTime hora={true} color="#222" />
                <p className="text-gray-700">Hora Perú</p>
              </div>
              <div className="left-56 top-9 absolute">
                <FontAwesomeIcon
                  icon="fa-solid fa-clock"
                  className="text-gray-800 absolute"
                  style={{ fontSize: "40px" }}
                />
              </div>
            </div>
            <div className="relative w-80 bg-gray-100 rounded-xl h-28 flex justify-center items-center gap-3">
              <div className="left-8 absolute">
                <DateTime fecha={true} color="#222" />
                <p className="text-gray-700">Fecha Local</p>
              </div>
              <div className="left-56 top-9 absolute">
                <FontAwesomeIcon
                  icon="fa-solid fa-calendar-days"
                  className="text-gray-800"
                  style={{ fontSize: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerViews>
    </>
  );
};
export default Home;
