import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, IconButton } from "rsuite";
import CustomTable from "../../components/shared/customs/CustomTable";
import columnheaders from "../../columnHeaders/empresas.headers";
import documentoProxy from "../../proxy/tipoDocumento.proxy";

const Roles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const renderColumnsTable = () => {
    columnheaders.IndexTableColumns = columnheaders.IndexTableColumns.filter(
      (element) => element.name !== "Opciones"
    );

    columnheaders.IndexTableColumns.push({
      name: "Opciones",
      width: "140px",
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

  useEffect(() => {
    const obtenerData = () => {
      documentoProxy
        .obtenerListadoDocumentos()
        .then((result) => setData(result.data.content))
        .finally(() => {
          setTimeout(() => setLoading(false), 1500);
        });
    };
    obtenerData();
  }, []);

  return (
    <>
      <Button className="btnPrimary" style={{ marginBottom: "10px" }}>
        <FontAwesomeIcon icon="fa-solid fa-plus" className="mr-2" />
        Nuevo
      </Button>
      <CustomTable
        columns={renderColumnsTable()}
        data={data}
        progressPending={loading}
      />
    </>
  );
};

export default Roles;
