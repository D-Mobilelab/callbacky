# callbacky

[![Build Status](https://travis-ci.org/D-Mobilelab/callbacky.svg?branch=master)](https://travis-ci.org/D-Mobilelab/callbacky)
[![Coverage Status](https://coveralls.io/repos/github/D-Mobilelab/callbacky/badge.svg?branch=master&v=1)](https://coveralls.io/github/D-Mobilelab/callbacky?branch=master)
[![npm version](https://badge.fury.io/js/callbacky.svg)](https://badge.fury.io/js/callbacky)
[![Bower version](https://badge.fury.io/bo/callbacky.svg)](https://badge.fury.io/bo/callbacky)
[![GitHub version](https://badge.fury.io/gh/D-Mobilelab%2Fcallbacky.svg)](https://badge.fury.io/gh/D-Mobilelab%2Fcallbacky)

Callbacky is a Javascript event handler that allows multiple parts of an application communicate with each other.

## Usage
```
Callbacky.init();

Callbacky.bind('eventName', function(args){ 
  console.log(args)) 
});
Callbacky.bind('eventName', function(args){ 
  console.warn(args)) 
});

Callbacky.trigger('eventName', 'world');
/* IT EXECUTES: 
console.log('world');
console.warn('world');
*/
```

## Installation

### NPM
```
npm install --save callbacky
```
You can found the library ready for production on <i>node_modules/callbacky/dist/dist.js</i>

### Bower
```
bower install --save callbacky
```
You can found the library ready for production on <i>bower_components/callbacky/dist/dist.js</i>

## Documentation

To read documentation, go to:

[http://d-mobilelab.github.io/callbacky/1.0.1](http://d-mobilelab.github.io/callbacky/1.0.1)

Replace <i>1.0.1</i> with the version of the documentation you want to read.
