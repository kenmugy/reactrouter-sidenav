import React from 'react';
import routes from './routes';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className='container row'>
        <section className='col s4 card-panel pink white-text'>
          <h6>side nav</h6>
          <hr />
          <ul>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>
              <Link to='/info'>info</Link>
            </li>
            <li>
              <Link to='/more'>more</Link>
            </li>
          </ul>
          <section>
            {routes.map(route => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.sideBar}
              />
            ))}
          </section>
        </section>
        <section className='main col s8'>
          <h3>main contents</h3>
          <hr />
          <Switch>
            {routes.map(route => (
              <Route
                exact={route.exact}
                key={route.path}
                path={route.path}
                component={route.main}
              />
            ))}
          </Switch>
        </section>
      </main>
    </Router>
  );
}

export default App;
