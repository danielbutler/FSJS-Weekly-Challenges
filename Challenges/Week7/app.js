//See readme for challenge instructions

var github = require("./github.js");

// this will grab the username from command line
var users = process.argv.slice(2);
users.forEach(github.getRepos);
