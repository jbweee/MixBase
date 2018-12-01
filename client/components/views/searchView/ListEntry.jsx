import React from 'react';
import { 
  CardInner, 
  CoverAndButtonsWrapper, 
  CoverAndButtonsInner, 
  ArtistWrapper, 
  TrackWrapper
} from '../../styles/CardStyle.jsx';

const ListEntry = (props) => {
  let mode = props.track.mode ? 'B' : 'A';
  return (
    <CardInner>
      <CoverAndButtonsWrapper>
        {/* Album Art and Buttons */}
        <CoverAndButtonsInner>
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
        </CoverAndButtonsInner>
      </CoverAndButtonsWrapper>
      <ArtistWrapper>
        {/* Artist Name */}
        {props.track.artist}
      </ArtistWrapper>
      <TrackWrapper>
        {/* Song Title */}
        {props.track.title}
      </TrackWrapper>
    </CardInner>
  )
};

export default ListEntry;