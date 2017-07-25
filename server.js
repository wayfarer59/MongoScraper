var express = require("express");
var bodyParser = require("body-parser");


var mongoose = require("mongoose");

var app = express();
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var router  = express.Router();

require("./config/routes")(router);

app.set("view engine", "handlebars");


mongoose.Promise = Promise;

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(router);

app.use(express.static(__dirname + "public"));

mongoose.connect("mongodb://localhost/");
var db = mongoose.connection;

db.on("error", function(error) {
  
	if(error){
  console.log("Mongoose Error: ", error);

}

else{

	console.log("mongoose connection")
}
});


db.once("open", function() {
  console.log("Mongoose connection successful.");
});



app.listen(3000, function() {
  console.log("App running on port 3000!");
});