import React, {Component} from "react";
import List from "../searchView/List.jsx";

class Saved extends Component {
  // componentDidMount() {
  //   browserHistory.push('/saved');
  // }

  render() {
    return (
      <div>
        Saved Page
        <List />
      </div>
    );
  }
}

export default Saved;