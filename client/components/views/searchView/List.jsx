import React from "react";
import ListEntry from "./ListEntry.jsx";
import ListWrapper from "../../styles/ListStyle.jsx";
import {CardOuter} from '../../styles/CardStyle.jsx';

const List = (props) => (
  <React.Fragment>
    <h3> Tracks List </h3>
    <ListWrapper>
      {props.tracks.map( (track) => (
        <CardOuter key={track.id}>
          <ListEntry track={track}/>
        </CardOuter>
      ))}
    </ListWrapper>
  </React.Fragment>
)

export default List;