import React, { Component } from 'react';
import {Route, Switch, Link, Redirect} from "react-router-dom";
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"> 

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
            <Route path="/search" component={Search} />
            <Route path="/saved" component={Saved} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;