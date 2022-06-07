import React from "react";
import "rsuite/dist/rsuite.min.css";
import { Form } from "rsuite";
import FormControlCustom from '../../../components/shared/Forms/FormControlCustom';
import Accepters from '../../../components/shared/Forms/Accepters';
import CustomModal from "../../../components/shared/customs/CustomModal";

const ModalAgregarTipoDocumento = ({
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
      formId="frmAgregarTipoDocumento"
    >
      <>
        <Form autoComplete="off" id="ModalAgregarTipoDocumento">
          <FormControlCustom
            name="tipoDTO"
            label="Tipo Documento"
            isRequired={true}
            accepter={Accepters.TextInput}
          ></FormControlCustom>
        </Form>
      </>
    </CustomModal>
  );
};

export default ModalAgregarTipoDocumento;