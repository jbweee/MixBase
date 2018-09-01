import React, {Component} from "react";
import {Router} from "react-router-dom";
import List from "./List.jsx";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      tracks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.fetch = this.fetch.bind(this);
    this.post = this.post.bind(this);
  };

  handleChange (e) {
    this.setState({
      term: e.target.value,
    });
  };

  handleSearch () {
    this.post(this.state.term);
  };

  post (term) {
    axios
      .post('/mixBase/search', { searchTerm: term } )
      .then(() => {
        console.log('Post sent to server')
        this.fetch();
      })
      .catch((error) => {
        console.error('Error Posting to Server', error)
      })
  };

  fetch () {
    axios
      .get('/mixBase/search')
      .then((tracks) => {
        console.log(tracks.data)
        this.setState({
          tracks: tracks.data,
        })
      })
      .catch(err => {
        console.log(err)
      })
  };

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
          value="Search"
          onClick={this.handleSearch}
        />
        <List tracks={this.state.tracks}/>
      </div>
    );
  }
}

export default Search;