import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "rsuite/dist/rsuite.min.css";
import { Form } from "rsuite";
import CustomModal from "../../../components/shared/customs/CustomModal";

const ModalAgregarRol = ({
  openModalInsertar,
  toogleModalInsertar,
}) => {

  return (
    <CustomModal
      title="Nuevo Tipo Documento"
      size="md"
      open={openModalInsertar}
      onCloseHandler={() => {
        toogleModalInsertar();
      }}
      btnActionPrimary="Guardar"
      formId="frmAgregarTipoServicio"
    >
      <>
        <Form
          autoComplete="off"
          id="frmAgregarTipoServicio"
        >
        </Form>
      </>
    </CustomModal>
  );
};

export default ModalAgregarRol;