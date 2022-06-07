import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/shared/Header";
import ContainerViews from "../../components/shared/ContainerViews";
import columnheaders from "../../columnHeaders/tipoDocumento.headers";
import { Button, IconButton } from "rsuite";
import ModalAgregarEmpresa from "./Modales/ModalAgregarTipoDocumento";
import useModal from "../../hooks/useModal";
import axios from "axios";
import CustomTable from "../../components/shared/customs/CustomTable";
import documentoProxy from '../../proxy/tipoDocumento.proxy';

const TipoDocumento = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [openModalInsertar, toogleModalInsertar] = useModal();

  const renderColumnsTable = () => {
    columnheaders.IndexTableColumns = columnheaders.IndexTableColumns.filter(
      (element) => element.name !== "Opciones");

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
    const obtenerData = () => {
      documentoProxy.obtenerListadoDocumentos()
        .then((result) => setData(result.data.content))
        .finally(() => {
          setTimeout(() => setLoading(false), 1500)
        })
    };
    obtenerData();
  }, []);

  return (
    <>
      <Header title="Tipo Documento" />
      <ContainerViews>
        <Button
          className="btnPrimary"
          style={{ marginBottom: "10px" }}
          onClick={toogleModalInsertar}
        >
          <FontAwesomeIcon icon="fa-solid fa-plus" className="mr-2" />
          Nuevo
        </Button>
        <CustomTable
          columns={renderColumnsTable()}
          data={data}
          progressPending={loading}
        />

        <ModalAgregarEmpresa
          openModalInsertar={openModalInsertar}
          toogleModalInsertar={toogleModalInsertar}
        />
      </ContainerViews>
    </>
  );
};
export default TipoDocumento;