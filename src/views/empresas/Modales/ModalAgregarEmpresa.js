import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "rsuite/dist/rsuite.min.css";
import { Form } from "rsuite";
import CustomModal from "../../../components/shared/customs/CustomModal";
import FormControlCustom from "../../../components/shared/Forms/FormControlCustom";
import Accepters from "../../../components/shared/Forms/Accepters";

const ModalAgregarEmpresa = ({
  openModalInsertar,
  toogleModalInsertar,
}) => {

  return (
    <CustomModal
      title="Nueva Empresa"
      size="md"
      open={openModalInsertar}
      onCloseHandler={() => {
        toogleModalInsertar();
      }}
      btnActionPrimary="Guardar"
      formId="frmAgregarEmpresa"
    >
      <>
        <Form
          autoComplete="off"
          id="frmAgregarEmpresa"
        >
          <div className="grid grid-cols-4 gap-8">
            <FormControlCustom
              className="col-span-2"
              name="nombreDTO"
              label="Nombre"
              isRequired={true}
              accepter={Accepters.TextInput}
            ></FormControlCustom>
            <FormControlCustom
              name="razonSocialDTO"
              className="col-span-2"
              label="Razon Social"
              isRequired={true}
              accepter={Accepters.TextInput}
            ></FormControlCustom>
          </div>
        </Form>
      </>
    </CustomModal>
  );
};

export default ModalAgregarEmpresa;