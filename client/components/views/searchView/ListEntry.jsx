import React from 'react';

const ListEntry = props => {
  return (
    <a href={props.track.url} className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          {props.track.title} <br/>
          <small className="mb-1">
            {props.track.artist}
          </small>
        </h5>
        <small className="mb-1">
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