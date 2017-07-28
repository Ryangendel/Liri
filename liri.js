var fs = require ("fs");
var request = require('request')

// take in command line arguments
var serviceRequested = process.argv[2];
var value = process.argv[3];

// Twitter variables
var Twitter = require("twitter");
var keys = require("./keys.js")
var client = new Twitter(keys.twitterKeys);
// console.log('client', client)

// Spotify login id
var Spotify = require('node-spotify-api');
var spotkeys = require("./spotifykey.js");

var spotify = new Spotify({
  id: spotkeys.spotifyKeys.id,
  secret: spotkeys.spotifyKeys.secret
});

// OMDB variables
var omdb = require('omdb');
omdb.search('saw', function(err, movies) {
    if(err) {
        return console.error(err);
    }
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });
});

// FUNCTIONS
function runTwitter (){
    console.log("insidefunc")
      var params = {screen_name: 'rgendel1234'};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) console.log(error)
        else  {
          for (var i = 0; i<tweets.length; i++){
            console.log(tweets[i].created_at);
            console.log(' ');
            console.log(tweets[i].text)
          }
        }
    });
  };

function runSpotify(){
  spotify.search({ type: 'track', query: value }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
     console.log(data.tracks.items[i])
  });
}

function runMovie(){
  omdb.get({ title: 'Saw', year: 2004 }, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(!movie) {
        return console.log('Movie not found!');
    }
 
    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    console.log(movie.plot);
 
    // Saw (2004) 7.6/10 
    // Two men wake up at opposite sides of a dirty, disused bathroom, chained 
    // by their ankles to pipes. Between them lies... 
});

  
// }

// deciding which call is placed
if (serviceRequested=== "my-tweets"){
  console.log("inside conditional")
  runTwitter()
}

else if (serviceRequested=== "spotify-this-song"){
 runSpotify()

}

else if(serviceRequested==="movie-this"){
  console.log("movie")
  runMovie();
}


// twitter requests:
// client.get(path, params, callback);

// else if (serviceRequested=== "spotify-this-song"){
//   function runSpotify(){    
//     spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//       if (err) {
//         return console.log('Error occurred: ' + err);
//       }
    
//     console.log(data); 
//     });

// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);

//   }
// };


// else if(serviceRequested==="do-what-it-says"){

  

// };

// else{
//   console.log("Do not understand commmand, try again")
// };









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

