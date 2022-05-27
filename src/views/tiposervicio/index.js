import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, IconButton } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { BreadcrumListado } from "../../breadcrums/solicitudServicio.breadcrums";
import columnheaders from "../../columnHeaders/tipoServicio.headers";
import ContainerViews from "../../components/shared/ContainerViews";
import CustomTable from "../../components/shared/customs/CustomTable";
import Header from "../../components/shared/Header";
import useAuthUser from "../../hooks/useAuthUser";
import useModal from "../../hooks/useModal";
import useSafeAsync from "../../hooks/useSafeAsync";
import tipoServicioProxy from "../../proxy/tipoServicio.proxy";
/* Modales */
import ModalAgregarTipoServicio from "./Modales/ModalAgregarTipoServicio";
import ModalEditarTipoServicio from "./Modales/ModalEditarTipoServicio";
import ModalEliminarTipoServicio from "./Modales/ModalEliminarTipoServicio";

const TipoServicio = () => {
  const [listado, setListado] = useState([]);
  const [loading, setLoading] = useState(true);
  const safeAsync = useSafeAsync();
  /* Modales */
  const [openModalInsertar, toogleModalInsertar] = useModal();
  const [openModalEliminar, toogleModalEliminar] = useModal();
  const [openModalEditar, toogleModalEditar] = useModal();

  const [rowDelete, setRowDelete] = useState(null);
  const { getUserCode } = useAuthUser();

  const defaultRowEdit = {
    id: 0,
    dscrpcn: "",
    uedcn: "",
  };
  const [rowEdit, setRowEdit] = useState(defaultRowEdit);

  // ACCIONES DE LOS BOTONES DE LA TABLA
  const handleOpenModalEliminar = (rowData) => {
    toogleModalEliminar();
    setRowDelete(rowData);
  };
  const handleOpenModalEditar = (rowData) => {
    toogleModalEditar();
    setRowEdit(rowData);
  };

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
              onClick={() => handleOpenModalEditar(row)}
              icon={<FontAwesomeIcon icon="fa-solid fa-pencil" />}
            />
            <IconButton
              className="btnPrimary"
              appearance="subtle"
              onClick={() => handleOpenModalEliminar(row.id)}
              icon={<FontAwesomeIcon icon="fa-solid fa-refresh" />}
            />
          </div>
        );
      },
    });
    return columnheaders.IndexTableColumns;
  };

  const CargarTabla = () => {
    setLoading(true);

    safeAsync(tipoServicioProxy.obtenerTipoServiciosListado()).then((res) => {
      setListado(res.data);
      setLoading(false);
    });
  };

  const handleEliminar = () => {
    let entidad = {
      id: rowDelete,
      uedcn: getUserCode(),
    };
    tipoServicioProxy.eliminarTipoServicio(entidad).then((res) => {
      CargarTabla();
      toogleModalEliminar();
      toast.success("Actualizado!");
    });
  };

  useEffect(() => {
    // safeAsync(tipoServicioProxy.obtenerTipoServiciosListado()).then((res) => {
    //   setListado(res.data);
    //   setLoading(false);
    // });

    CargarTabla();
  }, []);

  return (
    <>
      <Header title="Tipo Servicio" breadcrums={BreadcrumListado} />
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
          data={listado}
          progressPending={loading}
        />
      </ContainerViews>

      <ModalAgregarTipoServicio
        openModalInsertar={openModalInsertar}
        toogleModalInsertar={toogleModalInsertar}
        reload={() => {
          CargarTabla();
        }}
      />
      <ModalEditarTipoServicio
        openModalEditar={openModalEditar}
        toogleModalEditar={() => {
          toogleModalEditar();
          setRowEdit(defaultRowEdit);
        }}
        reload={() => {
          CargarTabla();
        }}
        data={rowEdit}
      />
      <ModalEliminarTipoServicio
        openModalEliminar={openModalEliminar}
        toogleModalEliminar={toogleModalEliminar}
        onDelete={handleEliminar}
      />
    </>
  );
};

export default TipoServicio;
