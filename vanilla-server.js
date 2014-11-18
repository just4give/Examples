/*This helps to serve Node.js as vanilla web server. 
http://localhost:3000 will load index.html under root directory.
Checkout 'connect' and 'serve-static' modules for more details. */
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(3000);
