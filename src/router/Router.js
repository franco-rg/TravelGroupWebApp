// ** React Imports
import { Suspense, lazy, Fragment, useContext } from 'react'

// ** Utils
import userservice from '../services/user.service'

// ** Router Components
import { BrowserRouter as AppRouter, Route, Routes, Navigate } from 'react-router-dom'

// ** Routes & Default Routes
import { DefaultRoute, PageRoutes } from './routes/IndexRoutes'

// ** Layouts
import Layout from '../components/shared/Layout';

import Spinner from '../components/shared/Spinner'


// ** Styles
import '../styles-others.css'
import { AppContextProvider } from '../contexts/AppContext';


const Router = () => {

  // ** Current Active Item
  const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')


  const NotAuthorized = lazy(() => import('../views/home/NoAutorizado'))

  // ** Init Error Component
  const Error = lazy(() => import('../views/home/Error'))

  /**
   ** Final Route Component Checks for Login & User Role and then redirects to the route
   */
  const FinalRoute = props => {
    const route = props.route
    let action, resource

    // ** Assign vars based on route meta
    if (route.meta) {
      action = route.meta.action ? route.meta.action : null
      resource = route.meta.resource ? route.meta.resource : null
    }

    if (
      (!userservice.getUserAccessToken() && route.meta === undefined) ||
      (!userservice.getUserAccessToken() && route.meta && !route.meta.authRoute && !route.meta.publicRoute)
    ) {
      /**
       ** If user is not Logged in & route meta is undefined
       ** OR
       ** If user is not Logged in & route.meta.authRoute, !route.meta.publicRoute are undefined
       ** Then redirect user to login
       */
      return <Navigate to='/login' />
    } else if (route.meta && route.meta.authRoute && userservice.getUserAccessToken()) {
      // ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)
      return <Navigate to='/' />
    } else {
      // ** If none of the above render component
      return <route.component {...props} />
      //return <Redirect to='/login' />
    }
  }

  // ** Return Route to Render
  const ResolveRoutes = () => {
    return (
      <>
        {PageRoutes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact === true}
              element={
                <Fragment>
                  <FinalRoute route={route} />
                </Fragment>
              }
            />
          )
        })}
      </>
    )
  }

  return (
    <AppRouter basename={baseUrl}>
      <AppContextProvider>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Routes>
              {/* If user is logged in Redirect user to DefaultRoute else to login */}
              <Route
                exact
                path='/'
                element={userservice.getUserAccessToken() ? <Navigate to={DefaultRoute} /> : <Navigate to='/login' />}
              />
              {/* Not Auth Route */}
              <Route
                exact
                path='/no-autorizado'
                element={<NotAuthorized />}
              />
              {ResolveRoutes()}

              {/* NotFound Error page */}
              <Route path='*' component={Error} />
            </Routes>
          </Suspense>
        </Layout>
      </AppContextProvider>
    </AppRouter>
  )
}

export default Router
