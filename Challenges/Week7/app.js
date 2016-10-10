//See readme for challenge instructions

var github = require("./github.js");

var users = process.argv.slice(2);
users.forEach(github.getRepos);
