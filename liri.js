/*

9. Make it so liri.js can take in one of the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

*/



var keys = require('./keys');
require("dotenv").config();
var request = require('request');
var Spotify = require('node-spotify-api');
var inquirer = require('inquirer'); //not sure if will use
var fs = require('fs'); 


//VARIABLES FOR API CALLS AND URLS
//var spotify = new Spotify(keys.spotify);

//  console.log(spotify);

//http://www.omdbapi.com/?i=tt3896198&apikey=d3f12a25


//Global Vars
var type = process.argv[2];


//OMDB vars
var movieKey = process.env.OMDBKEY;
var movieSearch = process.argv.slice(3).join(" ");
console.log(movieSearch);
var omdbURL = "http://www.omdbapi.com/?apikey=" + movieKey + "&t=";

console.log(omdbURL);
//console.log(response);
//console.log(body);
console.log("this ran");
console.log(movieKey);



if (type='movie-this') {


    request(omdbURL + movieSearch + "", function (error, response, body) {
        if (error) {
            console.log("Error is " + error);
        }
        var data = JSON.parse(body);
        console.log("\n");
        console.log("Movie title: " + data.Title);
        console.log("Year: " + data.Year);
        console.log("IMBD Rating: " + data.imdbRating);
        console.log("Rotten Tomatoes: " + data.Ratings[1]);
        console.log("Country: " + data.Country);
        console.log("Language: " + data.Language);
        console.log("Actors: " + data.Actors);
        console.log("Plot: " + data.Plot);

    
    });

}

else  {console.log("not a valid command")};



