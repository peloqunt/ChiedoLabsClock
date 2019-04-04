var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.use("/style", express.static(__dirname));

// Maybe we have to have them seperately and got rid of path.
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
