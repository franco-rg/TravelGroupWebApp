import { lazy } from 'react'

const PaginasRoutes = [
  {
    path: '/inicio2',
    component: lazy(() => import('../../views/home/Home'))
  },
  {
    path: '/inicio',
    component: lazy(() => import('../../views/home/Home_version2'))
  },
  {
    path: '/no-autorizado',
    component: lazy(() => import('../../views/home/NoAutorizado'))
  },
  {
    path: '/mantenimiento',
    component: lazy(() => import('../../views/home/Mantenimiento'))
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/home/Error')),
    meta: {
      publicRoute: true
    }
  }
]

export default PaginasRoutes
