import { lazy } from 'react'

const ServicioTarifas = [
    {
        path: '/tarifas',
        component: lazy(() => import('../../views/tarifas/index'))
    },
    // {
    //     path: '/solicitudservicio/agregar',
    //     component: lazy(() => import('../../views/solicitudservicio/AgregarSolicitudServicio'))
    // },
    // {
    //     path: '/solicitudservicio/servicio',
    //     component: lazy(() => import('../../views/solicitudservicio/AgregarServicio'))
    // }
];

export default ServicioTarifas;