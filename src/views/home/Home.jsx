import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/shared/Header";
import DateTime from "./DateTime";
import ContainerViews from "../../components/shared/ContainerViews";

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
                style={{ background: "#D0023C" }}
              >
                {/* <img
                  className="min-w-full p-28"
                  src={logo}
                  alt="logo_img"
                  style={{ minWidth: "70px", minHeight: "20px" }}
                /> */}
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-gray-100 border border-gray-200 rounded-lg h-28 flex flex-col justify-center items-center gap-3">
            <FontAwesomeIcon
              icon="fa-solid fa-calendar-days"
              className="text-gray-800"
              style={{ fontSize: "35px" }}
            />
            <DateTime fecha={true} color="#222" />
          </div>
          <div className="col-span-2 bg-gray-100 border border-gray-200 rounded-lg h-28 flex flex-col justify-center items-center gap-3">
            <FontAwesomeIcon
              icon="fa-solid fa-clock"
              className="text-gray-800"
              style={{ fontSize: "35px" }}
            />
            <DateTime hora={true} color="#222" />
          </div>
        </div>
      </ContainerViews>
    </>
  );
};
export default Home;
