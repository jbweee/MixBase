import React, { Component } from 'react';
import {Route, Switch, Link, Redirect} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './views/homeView/Home.jsx';
import Search from './views/searchView/Search.jsx';
import Saved from './views/savedView/Saved.jsx';

class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div 
        style={styles.screen}
      >
        <CssBaseline/>
        <h1 style={{"margin": "0"}}>MixBase</h1>
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

const styles = {
  screen: {
    "color": "white",
    "background": "#1E1F21",
    "height": "100%",
  }
}

export default App;