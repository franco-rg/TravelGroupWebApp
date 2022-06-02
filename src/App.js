import './tailwind.css';
import { Outlet} from 'react-router-dom';
import Layout from '../src/components/shared/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './styles-others.css'
import './tailwind.css';
library.add(fas);

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App;