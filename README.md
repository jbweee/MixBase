# MixBase
Currently a work in progress.

Upon searching, it automatically saves to the database. Will eventually just render searches to the page and have a button next to the songs that will save to the saved page.

## How to start this app

- `npm install`
- `npm run server-dev`
- `npm run react-dev`
- `brew install mongodb`
- `mkdir -p ~/data/db`
- `mongod --dbpath ~/data/db`
- `mongo`

## Todo:
1. Have OAuth2 with Spotify to allow users to save their saved songs to a playlist
2. When searching songs and getting keys, translate it to a color with an array with the search and set the color style in for the card
    - Also have the number/letter pair (e.g. 12B)
        - Check to see what Spotify outputs
    - Have the contents showing gridlike
        - Maybe two entries per line 
    - Have a button to save and save it to the DB
3. Have contents load directly on the browser instead of saving to DB
4. Saved Page:
    - When directing to the saved page, render the DB contents
    - Have a button on the songs to be able to delete them
    - Have a button to save the contents to a playlist
    - Allow for dragging of songs to reorder them

5. Implement Sever Side Rendering of Home Page
    - Then try with Next.js
    - Use GraphQL to get the data from songs???
    - Allow for filtering by key
