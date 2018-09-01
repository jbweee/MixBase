import React from "React";
import ListEntry from "./ListEntry.jsx";

const List = props => {
  return(
    <div>
      <h3> Tracks List </h3>
      {props.tracks.map( (track) => (
        <div className="list-group">
          <ListEntry track={track} key={track.id}/>
        </div>)
      )}
    </div>
  )
}

export default List;