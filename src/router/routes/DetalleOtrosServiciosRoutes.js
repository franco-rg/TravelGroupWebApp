import { lazy } from 'react'

const DetalleOtrosServiciosRoutes = [
  {
    path: '/detalle-otros-servicios',
    component: lazy(() => import('../../views/detalleOtrosServicios/index'))
  }
]

export default DetalleOtrosServiciosRoutes