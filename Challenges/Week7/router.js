var github = require("./github.js");
var querystring = require("querystring");
var  commonHeaders = {'Content-Type': 'text/html'};

// Handle HTTP route GET / and POST / i.e. home
function home(request, response) {
  // if url == "/" && GET
  if(request.url === "/") {
    if(request.method.toLowerCase() === "get") {
      // show search
      response.writeHead(200, commonHeaders);
      response.write("Please add a '/user' to your URL");
      response.end();
    } else {
      // if url == "/" && POST

      // Get the POST data from body
      request.on("data", function(postBody) {
        // Extract the username
        var query = querystring.parse(postBody.toString());
        // redirect to /:username
        response.writeHead(303, {"Location": "/" + query.username});
        response.end();
      });


    }
  }
}

// Handle HTTP route GEt /:username i.e. /chalkers
function user(request, response) {
  // if url == "/..."
  var username = request.url.replace("/", "");
  var message = "";
  if(username.length > 0) {
    response.writeHead(200, commonHeaders);
    response.write(username);
    response.end();
  }

  // on "error"
  response.on("error", console.error);
}

module.exports.home = home;
module.exports.user = user;
