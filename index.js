var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('EcoRealms backend is listening on port 3000!');
});
