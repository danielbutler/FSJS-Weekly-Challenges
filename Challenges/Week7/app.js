//See readme for challenge instructions

var github = require("./github.js");
var router = require("./router.js");

// this will grab the username from command line
// console.log(process.argv);
var users = process.argv.slice(2);
// console.log(users);
users.forEach(github.getRepos);

var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log('Server running');
