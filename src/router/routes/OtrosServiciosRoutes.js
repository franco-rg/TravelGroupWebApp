import { lazy } from 'react'

const OtrosServiciosRoutes = [
  {
    path: '/otros-servicios',
    component: lazy(() => import('../../views/otrosServicios/index'))
  }
]

export default OtrosServiciosRoutes