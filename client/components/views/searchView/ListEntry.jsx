import React from 'react';

const ListEntry = props => {
  return (
    <a href={props.track.url} className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          {props.track.title}
        </h5>
      </div> 
        <small className="mb-1">
          {props.track.artist}
        </small>
    </a>
  )
};

export default ListEntry;