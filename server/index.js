const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./router.js');
const PORT = 3000;

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/mixBase', router);

// app.use('/*', function(req, res) {
//   res.sendFile(path.resolve(__dirname, '../static/index.html'), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   })
// })
app.use(function(req, res, next){
  let temp = req.url.split('/');

  console.log('before', req.url)
  req.url = temp[temp.length-2];
  if(req.url.indexOf('.') === -1){
    req.url = '/';
    console.log('after', req.url)
  }
  console.log('more after', req.url)
  next();
});

//just need to set static to the folder
app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, () => {
  console.log('MixBase listening on PORT', PORT);
})