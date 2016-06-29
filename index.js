// includes
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var app = express();

// setup
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// initialization
app.listen(3000, function () {
  console.log('The EcoRealms backend is listening on port 3000!');
});

// routes
app.get('/', function (req, res) {
  res.render('index');
});

// routes
app.get('/tests', function (req, res) {
  res.render('tests');
});
