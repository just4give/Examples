var http = require('http'); //import http module

//creating HTTP Server
var server = http.createServer( function (req, res){
	console.log("Request received.");
	res.writeHead(200, { "Content-Type" : "text/html"});
	res.write("Welcome to <b>Node.js</b>");
	res.end();
});

server.listen(3000); // Server listening to port 3000. This can be any open port eg 8080.
console.log("Server started. Listening on port 3000.");
//Go to http://localhost:3000 on your browser.