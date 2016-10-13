
var github = require("./github.js");
var router = require("./router.js");

// this will grab the username from command line
// var users = process.argv.slice(2);
// users.forEach(github.getRepos);

var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log('Server running!');
