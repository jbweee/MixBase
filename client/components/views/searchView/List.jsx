import React from "React";
import ListEntry from "./ListEntry.jsx";

const List = props => {
  return(
    <div>
      Tracks List
      {props.tracks.map( (track) => 
        (<ListEntry track={track} key={track.id}/>)
      )}
    </div>
  )
}

export default List;