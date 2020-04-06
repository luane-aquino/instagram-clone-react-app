import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Perfil from '../pages/perfil'
import Home from '../pages/home'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/perfil" exact component={Perfil} />
    </Switch>
  )
}

export default Routes
