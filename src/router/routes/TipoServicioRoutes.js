import { lazy } from 'react'

const TipoServicioRoutes = [
  {
    path: '/tiposervicio',
    component: lazy(() => import('../../views/tiposervicio/index'))
  },
  {
    path: '/tiposervicio/registro',
    component: lazy(() => import('../../views/tiposervicio/Modales/ModalEditarTipoServicio'))
  }
]

export default TipoServicioRoutes