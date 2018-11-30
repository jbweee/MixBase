import React from 'react';
import {CardInner} from '../../styles/CardStyle.jsx';

const ListEntry = (props) => {
  let mode = props.track.mode ? 'B' : 'A';
  return (
    <CardInner>
      <div>
        {/* Album Art and Buttons */}
        <div>
          {/* Album Art */}
          <a href={props.track.url}>

          </a>
        </div>
        <div>
          {/* Buttons */}
          <div>
            {/* Save Button */}
          </div>
          <div>
            {/* Key Button -> Can sort all songs by the key and adjacent keys*/}
            {props.track.key + mode}
          </div>
          <div>
            {/* More Details */}
          </div>
        </div>
      </div>
      <div>
        {/* Artist Name */}
        {props.track.artist}
      </div>
      <div>
        {/* Song Title */}
        {props.track.title}
      </div>
    </CardInner>
  )
};

export default ListEntry;

//Tempo: {props.track.tempo}
//Time Signature: {props.track.time_signature}
//Danceability: {props.track.danceability}