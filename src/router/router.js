import React from 'react'
import {
  Route
} from 'react-router-dom'
import App from '../App'
import Find from '../components/Find'
import Home from '../containers/Home'

const routes = (
  <Route>
    <div>
    <Route path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/find" component={Find} />
    </div>
  </Route>
)

export default routes;