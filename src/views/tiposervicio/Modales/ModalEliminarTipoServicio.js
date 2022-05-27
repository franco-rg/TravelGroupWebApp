import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomModal from '../../../components/shared/customs/CustomModal';

const ModalEliminarTipoServicio = ({ openModalEliminar, toogleModalEliminar, onDelete }) => {
    return (
        <CustomModal
            modalType="delete"
            doAction={() => onDelete()}
            title="Cambiar Estado Tipo de Servicio"
            size="sm"
            open={openModalEliminar} onCloseHandler={toogleModalEliminar} btnActionPrimary='Aceptar'
        >
            <div className='m-auto w-full flex justify-center flex-col items-center gap-4'>
                <div className='w-20 h-20 rounded-full border-2 border-red-700 bg-red-50 flex justify-center items-center'>
                    <FontAwesomeIcon icon="fa-solid fa-refresh" className='text-red-800 text-3xl' />
                </div>
                <p className='text-base poppins'>¿Seguro que deseas cambiar el estado del registro?</p>
            </div>
        </CustomModal>
    );
}

export default ModalEliminarTipoServicio;