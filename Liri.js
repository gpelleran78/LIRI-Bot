require("dotenv").config;


let axios = require("axios");
let Spotify = require('node-spotify-api');
let fs = require('fs')
let spotifykeys = require('./keys.js');
let spotify = new Spotify(spotifykeys.spotify);



const [node, file, ...args] = process.argv;





if (args[0] === "movie-this"){
    if (args[1] === undefined){
        getMovie("Star+Wars");
    }
    else{
        getMovie(args.slice(1).joint(","));
    }
};


