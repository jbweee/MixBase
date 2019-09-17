# MixBase

Spotify search engine that allows the user to obtain audio properties for songs. Mainly catered towards DJs who want to quickly look up the key, bpm, vocalness, danceabilitiy, etc. of the song. 

Currently a work in progress.

## How to start this app

- `npm install`
- `npm run server-dev`
- `npm run react-dev`

## Todo:
- [ ] Strip mongoDB from the project (do not need to save search results to a database)
    - [ ] Rewire so that the results are rendered and formatted to the screen after searching (incorporate a loading state)
- [ ] Rewrite React components with React Hooks
- [ ] Have OAuth2 with Spotify to allow users to save their saved songs to a playlist
- [ ] When searching songs and getting keys, translate it to a color with an array with the search and set the color style in for the card
    - [ ] Also have the number/letter pair (e.g. 12B)
        - Check to see what Spotify outputs
    - [ ] Have the contents showing gridlike
        - Maybe two entries per line with a phone layout
    - [ ] Have a button to save song to a temporary data store
- [ ] Saved Page:
    - [ ] Have a button on the songs to be able to delete them
    - [ ] Have a button to save the contents to a playlist
    - [ ] Allow for dragging of songs to reorder them

- [ ] Implement Sever Side Rendering of Home Page
    - Then try with Next.js
    - Use GraphQL to get the data from songs???
    - Allow for filtering by key
