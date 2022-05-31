import './tailwind.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/views/home/Home'
import Login from './views/Login';
import Layout from '../src/components/shared/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './styles-others.css'
import './tailwind.css';
library.add(fas);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={
          <Layout>
            <Home />
          </Layout>} />
          <Route path='/' element={<Login />} />
      </Routes>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      </BrowserRouter> */}
    </BrowserRouter>

  )
}

export default App;