import { lazy, useContext } from 'react'
import redirectService from '../../services/redirect.service'
import authService from '../../services/auth.service'

const AuthRoutes = [
  {
    path: '/login',
    // component: lazy(() => import('../../views/auth/Login')),
    component: lazy(() => {
      window.location.href = authService.getAuthUrl()
      return null;
    }),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/connect',
    // component: lazy(() => import('../../views/auth/Connect')),
    component: lazy(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const access_token = urlParams.get('access_token');
      const refresh_token = urlParams.get('refresh_token');

      // var token = access_token?.split('.');
      // var refreshtoken = refresh_token?.split('.');

      //if (token == null || token.Length == 0)
      //    throw new Exception("sdasdsafasfaf");
      // const base64Content = atob(token[1]);
      // const base64Contentrefresh = atob(refreshtoken[1]);


      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      // const user = JSON.parse(base64Content);
      // const userrefresh = JSON.parse(base64Contentrefresh);

      // localStorage.setItem("SCRSLES", user.SCRSLES ?? "");
      // localStorage.setItem("PRFLS", user.PRFLS ?? "");
      // localStorage.setItem("ScrslSelec", user.ScrslSelec ?? "");
      // localStorage.setItem("ActDirec", user.ActDirec);
      // localStorage.setItem("USERID", user.USERID);
      // localStorage.setItem("WORKERID", user.WORKERID);
      // localStorage.setItem("IDCONTRATISTA", user.IDCONTRATISTA);
      // localStorage.setItem("FNCNRO", user.FNCNRO);
      // localStorage.setItem("NameIdentifier", user.nameid);
      // localStorage.setItem("Name", user.unique_name);
      // localStorage.setItem("Surname", user.family_name ?? "");
      // localStorage.setItem("Email", user.email);
      //setUser(access_token);
      redirectService.redirectWithSubfolder("/");
    }),
    meta: {
      publicRoute: true
    }
  },
]

export default AuthRoutes