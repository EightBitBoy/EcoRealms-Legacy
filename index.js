// includes
var express = require('express');
var path = require('path');
var app = express();

// setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// initialization
app.listen(3000, function () {
  console.log('EcoRealms backend is listening on port 3000!');
});

// routes
app.get('/', function (req, res) {
  res.render('index');
});
