const config = require('./config')
require('dotenv').config();

var app = require('./controller/app')
var hostname = "localhost"
var port = 8081;

app.listen(port, function () {
    console.log(`Server hosted at http://${hostname}:${port}`)
})