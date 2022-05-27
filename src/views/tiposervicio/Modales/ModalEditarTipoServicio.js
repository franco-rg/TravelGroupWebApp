import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Schema } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import CustomModal from '../../../components/shared/customs/CustomModal';
import Accepters from "../../../components/shared/Forms/Accepters";
import Auditoria from '../../../components/shared/Forms/Auditoria';
import FormControlCustom from '../../../components/shared/Forms/FormControlCustom';
import format from '../../../core/dateFormat';
import errores from '../../../core/errores';
import useAuthUser from '../../../hooks/useAuthUser';
import useCatalog from '../../../hooks/useCatalog';
import useFormInput from '../../../hooks/useFormInput';
import tipoServicioProxy from '../../../proxy/tipoServicio.proxy';

const ModalEditarTipoServicio = ({ reload, data, openModalEditar, toogleModalEditar }) => {
    const { getUserCode } = useAuthUser();
    const { StringType } = Schema.Types;
    const model = Schema.Model({
        dscrpcn: StringType().isRequired(errores.ERROR_MESSAGE.Required),
        gdestdo: StringType().isRequired(errores.ERROR_MESSAGE.Required),
    });

    // const estados = catalogServ.LlenarSelectGD("GDESTDO");
    const [estados] = useCatalog("GDESTDO");

    const defaultFormValue = {
        id: 0,
        dscrpcn: '',
        uedcn: getUserCode(),
        gdestdo: '',
        fcrcn: format.FormatoFecha(new Date())
    };

    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState(defaultFormValue);

    const [descripcion, setDescripcion] = useFormInput("");

    const resetForm = () => {
        setFormValue(defaultFormValue);
        setDescripcion("")
    };

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        tipoServicioProxy.actualizarTipoServicio(formValue)
            .then(res => {
                if (res.data.codEstado == -1)
                    toast.error(res.data.mensaje);

                else {
                    toast.success("Actualizado!")
                    resetForm()
                    reload()
                    toogleModalEditar()
                }
            });
    };

    useEffect(() => {
        setDescripcion("")
        if (data) {
            setDescripcion(data.dscrpcn)
            setFormValue({
                id: data.id,
                dscrpcn: data.dscrpcn,
                gdestdo: data.gdestdo,
                fcrcn: data.fcrcn,
                ucrcn: data.ucrcn,
                uedcn: data.uedcn,
                fedcn: data.fedcn,
                festdo: data.festdo
            })
        }
    }, [data]);

    return (
        <CustomModal
            title="Editar Tipo Servicio"
            size="md" open={openModalEditar}
            onCloseHandler={toogleModalEditar}
            btnActionPrimary='Guardar'
            formId="frmAgregarTipoServicio">
            <>
                <Form
                    ref={formRef}
                    checkTrigger="change"
                    onChange={setFormValue}
                    onCheck={setFormError}
                    formValue={formValue}
                    onSubmit={handleSubmit}
                    model={model}
                    autoComplete="off"
                    id="frmAgregarTipoServicio" >
                    <FormControlCustom rowError={formError.dscrpcn}
                        name="dscrpcn"
                        label="Descripción"
                        onChange={setDescripcion}
                        onBlur={setDescripcion}
                        value={descripcion}
                        isRequired={true}
                        accepter={Accepters.TextInput}
                    ></FormControlCustom>
                    <Auditoria
                        cols={3}
                        formError={formError}
                        selectData={estados}
                        formValue={formValue}
                        setFormValue={setFormValue}
                    />
                </Form>
            </>
        </CustomModal>
    )
}

export default ModalEditarTipoServicio;