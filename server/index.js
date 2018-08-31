var express = require('express');
var parser = require('body-parser');
var path = require('path');
var router = require('./router.js');
var PORT = 3000;

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/search', router);
app.use('/saved', router);
//just need to set static to the folder
app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, () => {
  console.log('MixBase listening on PORT', PORT);
})