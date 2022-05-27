// ** Importar Rutas
import AuthRoutes from './AuthRoutes'
import TipoServicioRoutes from './TipoServicioRoutes'

// ** Rutas por defecto
const LoginRoute = '/login'
const DefaultRoute = '/inicio'

// ** Juntar Rutas
const PageRoutes = [
  ...AuthRoutes,
  ...TipoServicioRoutes
]

export { DefaultRoute, PageRoutes, LoginRoute }