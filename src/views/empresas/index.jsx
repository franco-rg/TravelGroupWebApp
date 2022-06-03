import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/shared/Header";
import ContainerViews from "../../components/shared/ContainerViews";
import columnheaders from "../../columnHeaders/empresas.headers";
import { Button, IconButton } from "rsuite";
import ModalAgregarEmpresa from "./Modales/ModalAgregarEmpresa";
import useModal from "../../hooks/useModal";
import axios from "axios";
import CustomTable from "../../components/shared/customs/CustomTable";

const Home = () => {
  const baseUrl = "http://localhost:9880/api/v1/tipoDocumento/listar";
  const [data, setData] = useState([]);
  
  const [openModalInsertar, toogleModalInsertar] = useModal();

  const renderColumnsTable = () => {
    columnheaders.IndexTableColumns = columnheaders.IndexTableColumns.filter(
      (element) => {
        return element.name !== "Opciones";
      }
    );

    columnheaders.IndexTableColumns.push({
      name: "Opciones",
      width: '140px',
      cell: (row) => {
        return (
          <div className="m-auto">
            <IconButton
              className="btnSecondary"
              style={{ margin: "0 5px" }}
              appearance="subtle"
              icon={<FontAwesomeIcon icon="fa-solid fa-pencil" />}
            />
            <IconButton
              className="btnPrimary"
              appearance="subtle"
              icon={<FontAwesomeIcon icon="fa-solid fa-refresh" />}
            />
          </div>
        );
      },
    });
    return columnheaders.IndexTableColumns;
  };

  useEffect(()=> {
    const obtenerData = async ()=> {
      const url = baseUrl;
      const result = await axios.get(url);
      console.log(result.data.content);
    };
    obtenerData();
  }, []);
  

  return (
    <>
      <Header title="Empresas" />
      <ContainerViews>
        <Button
          className="btnPrimary"
          style={{ marginBottom: "10px" }}
          onClick={toogleModalInsertar}
        >
          <FontAwesomeIcon icon="fa-solid fa-plus" className="mr-2" />
          Nuevo
        </Button>

        <p>Listado de empresas de transporte asociadas. *</p>
        <CustomTable
          columns={renderColumnsTable()}
          data={data}
        />

        <ModalAgregarEmpresa
          openModalInsertar={openModalInsertar}
          toogleModalInsertar={toogleModalInsertar}
        />
      </ContainerViews>
    </>
  );
};
export default Home;
