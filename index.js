'use strict';

// bluebird
var Promise = require('bluebird');


// npm
var jpeg = Promise.promisifyAll(require('jpeg-js'));

var fs = Promise.promisifyAll(require( 'fs'));

function SpacePigs () {

    this.buffer = null;


    this.decode2 = function(input) {
        readFile(input).bind(this)
            .then()
    };


    this.swipswap = function() {
        fs.readFileAsync(__dirname + "/test/0.jpg")
            .then(function(jpegData) {
                return jpeg.decode(jpegData);
            })
            .then( function(rawImageData) {
                var rawImg = {
                    data: rawImageData.data,
                    width: 4,
                    height: 4
                };
                return jpeg.encode(rawImg, 100);
            })
            .then( function(jpegImageData){
                return fs.writeFileAsync( __dirname + "/test/1.jpg", jpegImageData.data );
            })
            .catch(function(error){
                console.error(error);
            })
    };



}


SpacePigs.prototype.decode = function(input) {
    return readFile(input).bind({})
        .then(function(jpegdata){
            this.buffer = jpeg.decode( jpegdata);
            return this.buffer;
        }).bind();

};



module.exports = SpacePigs;