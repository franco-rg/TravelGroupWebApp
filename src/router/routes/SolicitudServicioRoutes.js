import { lazy } from 'react';

const SolicitudServicio = [
    {
        path: '/solicitudservicio',
        component: lazy(() => import('../../views/solicitudservicio/Index'))
    },
    {
        path: '/solicitudservicio/agregar',
        component: lazy(() => import('../../views/solicitudservicio/AgregarSolicitudServicio'))
    },
    {
        path: '/solicitudservicio/:idslctd/editar',
        component: lazy(() => import('../../views/solicitudservicio/EditarSolicitudServicio'))
    },
    {
        path: '/solicitudservicio/:idslctd/servicio/:idsrvco/detalle',
        component: lazy(() => import('../../views/solicitudservicio/AgregarDetalleServicio'))
    },
    {
        path: '/solicitudservicio/:idslctd/servicio/detalle',
        component: lazy(() => import('../../views/solicitudservicio/AgregarDetalleServicio'))
    },
    {
        path: '/solicitudservicio/:idslctd/servicio/:idsrvco/proveedor',
        component: lazy(() => import('../../views/solicitudservicio/VerProveedor'))
    }
];

export default SolicitudServicio;