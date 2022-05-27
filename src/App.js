import React from 'react';
import Router from './router/Router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const App = () => {

    return (
        <Router />
    )
}
export default App;