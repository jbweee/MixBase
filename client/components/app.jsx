import React, { Component } from 'react';
import {Route, Switch, Link, Redirect} from "react-router-dom";
import Home from './views/homeView/Home.jsx';
import Search from './views/searchView/Search.jsx';
import Saved from './views/savedView/Saved.jsx';

class App extends Component {
  constructor (props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>MixBase</h1>
        <nav>
          <div>
            <ul>
              <li> 

                  <Link to="/search" className="nav-link"> Search </Link> 

              </li>
              <li className="nav-item"> 

                  <Link to="/saved" className="nav-link"> Saved </Link> 

              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/saved" component={Saved} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;