var fs = require ("fs");
var request = require('request')

// take in command line arguments
var serviceRequested = process.argv[2];
var value = process.argv[3];


// Twitter variables
var Twitter = require("twitter");
var twitterKeys = require("./keys.js")

var client = new Twitter({
      consumer_key: process.env.twitterKeys.consumer_key,
      consumer_secret: process.env.twitterKeys.consumer_secret,
      access_token_key: process.env.twitterKeys.access_token_key,
      access_token_secret: process.env.twitterKeys.access_token_secret   
});


// Spotify variables
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
      id: spotifyKey.id,
      secret: spotifyKey.secret
    });
// OMDB variables



// deciding which call is placed
if (serviceRequested=== "my-tweets"){
  function runTwitter(){
      var params = {screen_name: 'nodejs'};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          console.log(tweets);
      }
  });
};

// twitter requests:
// client.get(path, params, callback);

else if (serviceRequested=== "spotify-this-song"){
  function runSpotify(){    
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
    
    console.log(data); 
    });

search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);

  }
};

else if(serviceRequested==="movie-this"){
  /* request('http://www.omdbapi.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); // Print the HTML for the Google homepage.  */
  <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
  var movieName = "mr+nobody";
  var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        // something like ---> $("#movies-view").html(JSON.stringify(response));
        //   renderButtons();
    });

  });
};

else if(serviceRequested==="do-what-it-says"){

  

};

else{
  console.log("Do not understand commmand, try again")
};









// var Twitter = require("twitter");

// var jscriptTwitter = require ("./keys.js")



// var params = {screen_name: 'nodejs'};

// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

// // Create an empty string for holding the address
// var twitterUserImput = "";

// // Capture all the words in the address (again ignoring the first two Node arguments)
// for (var i = 2; i < userInput.length; i++) {

//   // Build a string with the address.
//   address = address + " " + nodeArgs[i];

// }
