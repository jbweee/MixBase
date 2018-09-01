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
    this.spaceHandler = this.spaceHandler.bind(this);
  };

  componentDidMount() {
    this.fetch();
  }

  handleChange (e) {
    this.setState({
      term: e.target.value,
    });
  };

  handleSearch () {
    console.log(this.spaceHandler(this.state.term))
    this.post(this.spaceHandler(this.state.term));
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

  spaceHandler(term) {
    if (term.includes(' ')) {
      return term.split(' ').join('%20');
    }
    return term;
  }

  render() {
    return (
      <div>
        <form className="form-inline">
          <input 
            className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
            type="text" 
            value={this.state.term}
            onChange={this.handleChange}
          />
          <input 
            className="btn btn-outline-success my-2 my-sm-0"
            type="button" 
            value="Search"
            onClick={this.handleSearch}
          />
        </form>
        <List tracks={this.state.tracks}/>
      </div>
    );
  }
}

export default Search;