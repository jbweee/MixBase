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
  key: Number
});

let Track = mongoose.model('Track', trackSchema);

let save = (tracks, features, callback) => {
  let mappedData = [];
  for (let i = 0; i < tracks.length; i++) {
    mappedData.push({
      id: tracks[i].id,
      artist: tracks[i].artists[0].name,
      url: tracks[i].external_urls.spotify,
      title: tracks[i].name,
      key: features[i].key,
    })
  };
  Track.insertMany(mappedData)
    .then((docs) => callback(null, docs))
    .catch((err) => console.log('ERRRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRRRRRR', err));
  //     , (err, docs) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('inserted mappedData')
  //       callback(null, docs); 
}

module.exports.save = save;
module.exports.Track = Track;