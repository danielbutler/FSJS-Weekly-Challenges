var commonHeaders = {'Content-Type': 'text/html'};
var github = require("./github.js");
var fs = require("fs");

function home(request, response){
  if(request.url === "/") {
    if(request.method.toLowerCase() === "get") {
      response.writeHead(200, commonHeaders);
      response.write("Hello There");
      response.end();
    } else {
      response.end();
    }
  }
}


// Handle HTTP route Get /:username i.e. /chalkers
function user(request, response) {
  // if url == "/..."
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, commonHeaders);
    response.write(username);
    github.getRepos(username);
    response.end();
  }  else {
    response.end();
  }

  // on "error"
  response.on("error", console.error);
  }

module.exports.home = home;
module.exports.user = user;
