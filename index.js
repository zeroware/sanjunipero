var express = require('express')
var app = express()

var inspectRequest = function(req) {
    console.log(req.method);
    console.log(req.url);
    console.log(req.body);
    console.log(req.query);
    console.log('--------')
}

app.get('*', function (req, res){
  inspectRequest(req);
  res.send('Hello World!')
})

app.post('*', function(req, res){
  inspectRequest(req);
  res.send('hello world');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
