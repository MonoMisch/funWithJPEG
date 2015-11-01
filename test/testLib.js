'use strict';

// bluebird
var Promise = require('bluebird');


// npm
var jpeg = Promise.promisifyAll(require('jpeg-js'));
var fs = Promise.promisifyAll(require( 'fs'));


function SpacePigs () {

    this.buffer = null;

    this.sourcefilepath = __dirname + "/source0.jpg";

    var self = this;

    this.decode2 = function(input) {
        fs.readFileAsync(input).bind(this)
            .then()
    };


    this.swipswap = function() {
        fs.readFileAsync(__dirname + "/source0.jpg")
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
                fs.writeFileAsync( __dirname + "/destination/1.jpg", jpegImageData.data );
            })
            .catch(function(error){
                console.error(error);
            })
    };



    this.swipswap4 = function() {
        return new Promise(function(resolve, reject){
            fs.readFileAsync(self.sourcefilepath)
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
                    resolve(fs.writeFileAsync( __dirname + "/destination/4.jpg", jpegImageData.data ));
                })
                .catch(function(error){
                    reject(error);
                })
        })
    };


}


SpacePigs.prototype.swipswap2 = function() {
    return new Promise( function(resolve, reject){
        fs.readFileAsync(__dirname + "/source0.jpg")
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
                return fs.writeFileAsync( __dirname + "/destination/2.jpg", jpegImageData.data );
            })
            .then( function(){
                resolve("swipswap2 executed");
            })
            .catch(function(error){
                reject( error);
            });
    }).bind(this);

};

SpacePigs.prototype.swipswap3 = function() {
            return fs.readFileAsync(this.sourcefilepath)
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
                    fs.writeFileAsync( __dirname + "/destination/3.jpg", jpegImageData.data );
                });
};


SpacePigs.prototype.swipswap5 = function(destination) {
    return fs.readFileAsync(this.sourcefilepath)
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
            fs.writeFileAsync( destination, jpegImageData.data );
        });
};


module.exports = SpacePigs;