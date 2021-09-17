import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './styles/reset.css'
import './styles/commom.css'
import { Menu } from './components/Menu'
import { ThemeProvider } from 'styled-components'
import { themeLight } from './util/themes'
import constants from './util/constants'

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <div className="App">
        <Menu />
        <body>
          <Switch>
            {constants.pages.map((path, index) => (
              <Route path={path.path} component={path.component} key={index} />
            ))}
            <Route path="*">
              <Redirect to="/sobre" />
            </Route>
          </Switch>
        </body>
      </div>
    </ThemeProvider>
  )
}

export default App
