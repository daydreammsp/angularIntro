let myApp = angular.module('myApp', []);

myApp.controller('newController', function(){
    console.log('controller has started');
    let self = this;
    let hello = 'hi!!!';
    self.message = "Hello World";
});