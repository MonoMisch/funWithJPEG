"use strict";

var name = 'Ray';
var john = {
    name: 'John',
    greet: function(person) {
        console.log("Hi " + person + ", my name is " + name);
    }
};
john.greet("Mark");
var fx = john.greet;
fx("Darky");

var john2 = {
    name: 'John',
    greet: function(person) {
        console.log("Hi " + person + ", my name is " + this.name);
    }
};
john2.greet("Quark");
var fx2 = john2.greet;
fx2("Torky");