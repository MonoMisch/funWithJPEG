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
            this.width = jpegImageData.width;
            this.height = jpegImageData.height;
        })
        .return("source: " + source + " decoded");
};


SpacePegs.prototype.diffAllValues = function (pixel1, pixel2) {

};


module.exports = SpacePegs;