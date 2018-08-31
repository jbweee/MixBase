import React, { Component } from 'react';
import {Route, Switch, Link} from "react-router-dom";
import Search from './views/searchView/Search.jsx';
import Saved from './views/savedView/Saved.jsx';

class App extends Component {
  constructor (props) {
    super(props);

  }
  render() {
    return (
      <div>
        Home Page
        <nav>
          <Link to="/search"> Search </Link>
          <Link to="/saved"> Saved </Link>
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