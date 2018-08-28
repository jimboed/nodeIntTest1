var express = require("express");
var app = express();

app.use(function(req, res, next){


  next();

});

app.get("/integrationTest/test", function(req,res){

  res.set("Content-type", "application/json");
  res.send(JSON.stringify({
    greeting: "hello " + req.query.name
    }));
    res.end();

});

app.get("/", function(req,res){

    res.end('Hello World\n');
  });

app.listen(8080,function(){
  console.log("running application at http://127.0.0.1:8080");

});


// http://127.0.0.1:3000/integrationTest/test?name=jim
