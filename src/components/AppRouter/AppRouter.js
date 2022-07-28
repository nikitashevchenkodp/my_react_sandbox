import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { PUBLICK_ROUTES } from '../../utils/consts'


const AppRouter = () => {

  return (
    <Router>
        <Switch>
          {
              PUBLICK_ROUTES.map(({path, Component}) => {
                return (
                    <Route key = {path} path={path} exact component={Component}/>
                )
              })
          }
        </Switch>
      </Router>
  )
}

export default AppRouter