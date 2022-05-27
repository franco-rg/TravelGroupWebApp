import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Form, Schema } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import CustomModal from "../../../components/shared/customs/CustomModal";
import Accepters from "../../../components/shared/Forms/Accepters";
import Auditoria from "../../../components/shared/Forms/Auditoria";
import FormControlCustom from "../../../components/shared/Forms/FormControlCustom";
import errores from "../../../core/errores";
import useAuthUser from "../../../hooks/useAuthUser";
import useCatalog from "../../../hooks/useCatalog";
import useFormInput from "../../../hooks/useFormInput";
import tipoServicioProxy from "../../../proxy/tipoServicio.proxy";
import useAuditoria from "../../../hooks/useAuditoria";

const ModalAgregarTipoServicio = ({
  openModalInsertar,
  toogleModalInsertar,
  reload,
}) => {
  const formRef = useRef();
  const [formError, setFormError] = useState({});
  const { getUserCode } = useAuthUser();
  const defaultAuditoria = useAuditoria();

  // const estados = catalogServ.LlenarSelectGD("GDESTDO");
  const [estados] = useCatalog("GDESTDO");

  const defaultFormValue = {
    dscrpcn: "",
    ucrcn: getUserCode(),
    gdestdo: "",
    fcrcn: new Date(),
    ...defaultAuditoria
  };

  const [formValue, setFormValue] = useState(defaultFormValue);

  const { StringType } = Schema.Types;
  const model = Schema.Model({
    dscrpcn: StringType().isRequired(errores.ERROR_MESSAGE.Required),
    gdestdo: StringType().isRequired(errores.ERROR_MESSAGE.Required)
  });

  const [descripcion, setDescripcion] = useFormInput("");

  const reload_form = () => {
    setFormValue(defaultFormValue);
    setDescripcion("");
    setFormError({});
  };

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      return;
    }
    tipoServicioProxy.insertarTipoServicio(formValue).then((res) => {
      if (res.data.codEstado == -1) toast.error(res.data.mensaje);
      else {
        toast.success("Insertado!");
        toogleModalInsertar();
        reload();
        reload_form();
      }
    });
  };

  return (
    <CustomModal
      title="Agregar Tipo Servicio"
      size="md"
      open={openModalInsertar}
      onCloseHandler={() => {
        toogleModalInsertar();
        reload_form();
      }}
      btnActionPrimary="Guardar"
      formId="frmAgregarTipoServicio"
    >
      <>
        <Form
          ref={formRef}
          checkTrigger="change"
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          formError={formError}
          model={model}
          onSubmit={handleSubmit}
          autoComplete="off"
          id="frmAgregarTipoServicio"
        >
          <FormControlCustom
            error={formError.dscrpcn}
            name="dscrpcn"
            label="Descripción"
            value={formValue.dscrpcn}
            isRequired={true}
            accepter={Accepters.TextInput}
          ></FormControlCustom>
          <Auditoria
            cols={3}
            colsResponsive={3}
            formError={formError}
            formValue={formValue}
            setFormValue={setFormValue}
            selectData={estados}
          />
        </Form>
      </>
    </CustomModal>
  );
};

export default ModalAgregarTipoServicio;
