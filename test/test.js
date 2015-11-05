'use strict';

var SpacePig = require('./testLib.js');
var SpacePeg = require("../spacePegs.js");

var piggy = new SpacePig();
var peggy1 = new SpacePeg();
var Promise = require('bluebird');

var sourcePath = __dirname + "/source0.jpg";
var destPath = __dirname + "/destination/";

piggy.swipswap();
piggy.swipswap2()
    .then(console.log)
    .then(function(){
        return piggy.swipswap3();
    })
    .then(piggy.swipswap3)
    .then(piggy.swipswap4)
    .then(function(){
        return piggy.swipswap5(destPath + "/5.jpg");
    })
    // have a look on this funny
    // call of a method
    .return(destPath + "6.jpg")
    .then(piggy.swipswap5)

    .then( function(){
        return peggy1.decode(sourcePath);
    })
    .then(console.log)
    .then( function() {
        return peggy1.diff2Points([0,0,0,0], [10, 10, 10, 5])
    })
    .then(console.log)
    .then( function() {
        return peggy1.detectEdge(1, 1);
    })
    .then(console.log)
    .then( function() {
        return peggy1.detectEdge(2, 2);
    })
    .then(console.log)
    .catch(console.error)
    .finally( function(){
        console.log("test of space-pegs executed");
    });



