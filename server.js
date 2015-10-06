var express = require('express'),
    path    = require('path');

var app = express();

// use the public path for static files
app.use(express.static(path.join(__dirname, 'public')));

// start server
app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
