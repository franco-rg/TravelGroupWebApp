import { lazy } from 'react'

const ServiciosContratados = [
    {
        path: '/servicios-contratados',
        component: lazy(() => import('../../views/serviciosContratados/index'))
    },
    {
        path: '/servicios-contratados/datos/:id',
        component: lazy(() => import('../../views/serviciosContratados/DatosServicioContratado'))
    }
];

export default ServiciosContratados;