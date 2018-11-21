import React from 'react';

const ListEntry = (props) => {
  return (
    <a href={props.track.url}>
      <div>
        <h5>
          {props.track.title} <br/>
          <small>
            {props.track.artist}
          </small>
        </h5>
        <small>
          <h6>Key: {props.track.key}</h6>
          Tempo: {props.track.tempo} <br/>
          Time Signature: {props.track.time_signature} <br/>
          Danceability: {props.track.danceability} <br/>
        </small>
      </div> 
    </a>
  )
};

export default ListEntry;