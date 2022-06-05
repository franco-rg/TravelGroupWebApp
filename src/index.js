import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './views/home/Home';
import Login from './views/Login';
import Register from './views/Register';

/* Modules */
import Empresas from './views/empresas/index';
import RolesUsuarios from './views/roles-usuarios/index';
import TipoDocumento from './views/tipo-documento/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<App />} >
          <Route path='/inicio' element={<Home />} />
          <Route path='/empresas' element={<Empresas />} />
          <Route path='/roles-usuarios' element={<RolesUsuarios />} />
          <Route path='/tipo-documento' element={<TipoDocumento />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);