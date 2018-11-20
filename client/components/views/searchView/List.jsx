import React from "react";
import ListEntry from "./ListEntry.jsx";
import ListWrapper from "../../styles/ListStyle.jsx";
import Card from '../../styles/CardStyle.jsx';

const List = props => {
  return(
    <ListWrapper>
      <h3> Tracks List </h3>
      {props.tracks.map( (track) => (
        <Card>
          <ListEntry track={track} key={track.id}/>
        </Card>)
      )}
    </ListWrapper>
  )
}

export default List;