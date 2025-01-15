var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hello   ');
=======
 res.send('hello   ');
>>>>>>> bc86b8d53a31836ae8f463975296388836b0f3a6
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
i
