import React from 'react'
import {
  Route
} from 'react-router-dom'
import App from '../App'
import Bundle from '../components/Bundle'

const Find = (props) => (
  <Bundle load={() => import('../components/Find')}>
    {(Find) => <Find {...props} />}
  </Bundle>
);
const Home = (props) => (
  <Bundle load={() => import('../containers/Home')}>
    {(Home) => <Home {...props} />}
  </Bundle>
);

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