var express = require("express"),
	app = express(),
	port = 3000;

app.get("/", function(req, res){
	res.send("Hello from Express");
});

app.listen(port, function(){
	console.log("App is running on port", port);
});