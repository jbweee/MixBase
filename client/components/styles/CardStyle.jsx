import styled from 'styled-components';

export const CardOuter = styled.div`
  display: block;
  width: 20%;
  height: 15em;
  padding: 10px;
  /* figure out how to do pagination:
    Don't render until it is shown on the page */
`;

export const CardInner = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border: 1px solid #000000;
  flex-direction: column;
`;

export const CoverAndButtonsWrapper = styled.div`
  display: block;
`;

export const CoverAndButtonsInner = styled.div`
  display: flex;
`;

export const ArtistWrapper = styled(CoverAndButtonsWrapper)`
`;

export const TrackWrapper = styled(ArtistWrapper)`
`;