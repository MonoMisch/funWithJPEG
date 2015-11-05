"use strict";

var _ = require('lodash');

// promise
// bluebird
var Promise = require('bluebird');

// node
var fs = Promise.promisifyAll(require( 'fs'));

// npm
var jpeg = Promise.promisifyAll(require('jpeg-js'));


function SpacePegs () {

    this.decoded;
    this.decodedBuffer;
    this.width;
    this.height;


}


SpacePegs.prototype.decode = function (source) {
    return fs.readFileAsync(source).bind(this)
        .then(function(jpegData) {
            return jpeg.decode(jpegData);
        })
        .then( function(jpegImageData){
            this.decoded = _.chunk(jpegImageData.data, 4);
            this.decodedBuffer = jpegImageData.data;
            this.width = jpegImageData.width;
            this.height = jpegImageData.height;
        })
        .return("source: " + source + " decoded");
};


SpacePegs.prototype.diff2Points = function (pixel1, pixel2) {
    var sum = 0;
    pixel1.forEach( function( value, i){
        sum += Math.abs( value - pixel2[i] );
    });
    return sum;
};


SpacePegs.prototype.detectEdge = function (startX, startY) {
    var pos0 = startY * this.height + startX;

    return this.decoded[pos0];
};


module.exports = SpacePegs;