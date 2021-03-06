//See readme for challenge instructions

/*
 * Note about github api: requires User-Agent header to be set. This can be done
 * in Node by passing an options object (rather than a simple url string) as the
 * first param to the https.get() function
 *
 * So something like
 * var options = {
 *   hostname: api.github.com,
 *   path: <<try to find in documentation linked in readme>>,
 *   headers: {
 *     'User-Agent': '<<your github username>>'
 *   }
 * };
 *
 */

// function getRepos(username){
//   console.log('Repos for ' + username);
// }

var http = require('http');
var https = require('https');

// Create a message from the data pulled from
function createMessage(theRepos) {
  message = theRepos.name + " last updated: " + theRepos.updated_at + " \n";
  return message;
};

// Print out message
 function printMessage(data) {
   var message = "";
   for (i=1; i < data.length; i++) {
     message += createMessage(data[i]);
   }
   console.log(message);
 }

 // Print out error messages
 function printError(error) {
   console.error(error.message);
 }

// this funtion you will use to get the JSON info from github
function getRepos(username){
  var options = {
    hostname: "api.github.com",
    path: "/users/" + username + "/repos",
    headers: {
      'User-Agent': username
    }
  };
  var request = https.get(options, function(response) {
    var body = "";
    // Read the data
    response.on('data', (chunk) => {
      body += chunk;
    });
    response.on('end', function() {
      if(response.statusCode === 200) {
        try {
          // Parse the data
          var profile = JSON.parse(body);
          // grabbed the JSON output with the profile to see what variables I could use
          // console.log(profile);
          // Print the data
          printMessage(profile);
        } catch(error) {
        // Parse Error
          printError(error);
        }
      } else {
        // Status Code Error
        printError({message: "There was an error getting the repos for " + username +". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });

  });
  // Connection Error
  request.on("error", printError);
}

module.exports.getRepos = getRepos;
