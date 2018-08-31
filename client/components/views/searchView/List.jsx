import React, {Component} from "React";
import ListEntry from "./ListEntry.jsx";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
    }
  }

  render() {
    return(
      <div>
        Tracks List
        {/* {this.state.tracks.map((track) => {
          <ListEntry track={track}/>
        })} */}
      </div>
    )
  }
}

export default List;