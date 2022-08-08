import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "rsuite/dist/rsuite.min.css";
import { Form, Schema } from "rsuite";
import CustomModal from "../../../components/shared/customs/CustomModal";
import FormControlCustom from "../../../components/shared/Forms/FormControlCustom";
import Accepters from "../../../components/shared/Forms/Accepters";
import errores from "../../../core/errores";
import empresaProxy from "../../../proxy/empresa.proxy"

const ModalAgregarEmpresa = ({
  openModalInsertar,
  toogleModalInsertar,
  reload
}) => {

  const defaultFormValue = {
    nombreDTO: "",
    razonSocialDTO: "",
    estadoDTO: "ACTIVO",
  };

  const formRef = useRef();
  const [formError, setFormError] = useState({});
  const [formValue, setFormValue] = useState({});

  const { StringType } = Schema.Types;
  const model = Schema.Model({
    nombreDTO: StringType().isRequired(errores.ERROR_MESSAGE.Required),
    razonSocialDTO: StringType().isRequired(errores.ERROR_MESSAGE.Required),
  });

  useEffect(() => {
    if (openModalInsertar) {
      setFormValue(defaultFormValue);
    } else {
      setFormError({});
    }
  }, [openModalInsertar]);

  const handleSubmit = () => {
    if (!formRef.current.check()) return;
    empresaProxy.InsertarEmpresas(formValue).then((res) => {
      if (res.data.codEstado == -1) toast.error(res.data.mensaje);
      else {
        toast.success("Insertado!");
        reload();
      }
      toogleModalInsertar();
    });
  };

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
          ref={formRef}
          checkTrigger="change"
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          model={model}
          autoComplete="off"
          id="frmAgregarEmpresa"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 gap-8">
            <FormControlCustom
              error={formError.nombreDTO}
              className="col-span-2"
              name="nombreDTO"
              label="Nombre"
              isRequired={true}
              value={formValue.nombreDTO}
              accepter={Accepters.TextInput}
            ></FormControlCustom>
            <FormControlCustom
              error={formError.razonSocialDTO}
              name="razonSocialDTO"
              className="col-span-2"
              label="Razon Social"
              isRequired={true}
              value={formValue.razonSocialDTO}
              accepter={Accepters.TextInput}
            ></FormControlCustom>
            <FormControlCustom
              name="estadoDTO"
              className="hidden"
              label="Razon Social"
              value={formValue.estadoDTO}
            ></FormControlCustom>
          </div>
        </Form>
      </>
    </CustomModal>
  );
};

export default ModalAgregarEmpresa;