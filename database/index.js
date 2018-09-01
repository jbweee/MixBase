const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost/music',
  { useNewUrlParser: true }
);

//make connection and have error and open signalling
var db = mongoose.connection;
db.on(
  'error',
  console.error.bind(console, 'Error connecting to the DATABASE') 
);
db.once('open', () => {
  console.log('Successfully connected to the DATABASE')
});

let trackSchema = mongoose.Schema({
  // TODO: your schema here!
  //what happens if same ID?
  id: {
    type: String,
    unique: true,
  },
  artist: String,
  url: String,

  title: String,
});

let Track = mongoose.model('Track', trackSchema);

let save = (tracks, callback) => {
    var mappedData = tracks.map( (track) => {
      return {
        id: track.id,
        artist: track.artists[0].name,
        url: track.external_urls.spotify,
        
        title: track.name,
      }
    })
    Track.insertMany(mappedData)
      .then((docs) => callback(null, docs))
      .catch((err) => console.log(err));
  //     , (err, docs) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('inserted mappedData')
  //       callback(null, docs); 
}

module.exports.save = save;
module.exports.Track = Track;