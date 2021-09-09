import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {Container} from 'semantic-ui-react'

import { Header } from './components'
import { Home, News } from './pages'


function App() {

  return (
    <div className="app">
      <Header/>
      <Container>
        <Switch>
          <Route path='/' exact >
            <Home />
          </Route>
          <Route path='/news/:id' exact>
            <News />
          </Route>
        </Switch>
      </Container>

    </div>
  );
}

export default App;
