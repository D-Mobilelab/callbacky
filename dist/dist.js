(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Callbacky = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Callbacky = new function(){

    var events = [];
    var logger = { 
        debug: function(){},
        log: function(){},
        info: function(){},
        warn: function(){},
        error: function(){}
    };

    this.init = function(options){
        if (options.logger){
            logger = options.logger;
        }

        logger.log('Callbacky', 'init', options);
    };

    this.bind = function(key, callback){
        if(!events[key]){ 
            events[key] = [];
        }
        events[key].push(callback);
        logger.log('Callbacky', 'bind', key, callback);
    };

    this.trigger = function(key, arg){
        logger.log('Callbacky', 'trigger', key, arg);
        if(events[key] && events[key].length > 0){
            for(var i = 0; i < events[key].length; i++){
                events[key][i].call(this, arg);
            }
        }        
    };

    this.clean = function(key){
        if(events[key]){
            events[key] = [];
        }

        logger.log('Callbacky', 'clean', key);
    };

};

module.exports = Callbacky;
},{}]},{},[1])(1)
});