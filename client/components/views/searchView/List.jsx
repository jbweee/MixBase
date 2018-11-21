import React from "react";
import ListEntry from "./ListEntry.jsx";
import ListWrapper from "../../styles/ListStyle.jsx";
import {CardInner, CardOuter} from '../../styles/CardStyle.jsx';

const List = (props) => (
  <React.Fragment>
    <h3> Tracks List </h3>
    <ListWrapper>
      {props.tracks.map( (track) => (
        <CardOuter>
          <CardInner>
            <ListEntry track={track} key={track.id}/>
          </CardInner>
        </CardOuter>)
      )}
    </ListWrapper>
  </React.Fragment>
)

export default List;