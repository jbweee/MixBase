import React, {Component} from "react";
import {Router} from "react-router-dom";
import List from "./List.jsx";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  };

  handleChange (e) {
    this.setState({
      term: e.target.value,
    });
  };

  handleSearch () {
    console.log(this.state.term);
  }

  render() {
    return (
      <div>
        Search Page
        <input 
          type="text" 
          value={this.state.term}
          onChange={this.handleChange}
        />
        <input 
          type="button" 
          onClick={this.handleSearch}
        />
        <List />
      </div>
    );
  }
}

export default Search;