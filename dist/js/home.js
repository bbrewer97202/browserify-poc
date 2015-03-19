require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({5:[function(require,module,exports){
var $ = require('jquery');
var bootstrap = require('bootstrap');
var homeFeature1 = require('../components/homeFeature1.js');
var homeFeature2 = require('../components/homeFeature2.js');
var someSharedComponent = require('../components/someSharedComponent.js');

homeFeature1.init();
homeFeature2.init();
someSharedComponent.init();
},{"../components/homeFeature1.js":1,"../components/homeFeature2.js":2,"../components/someSharedComponent.js":3,"bootstrap":8,"jquery":9}],2:[function(require,module,exports){
var logging = require('../utility/logging.js');

var homeFeature2 = (function() {

	function init() {
		logging.log("homeFeature2 init");
	}

	return {
		init: init
	}
})();

module.exports = homeFeature2;
},{"../utility/logging.js":7}],1:[function(require,module,exports){
var logging = require('../utility/logging.js');

var homeFeature1 = (function() {

	function init() {
		logging.log("homeFeature1 init");
	}

	return {
		init: init
	}
})();

module.exports = homeFeature1;
},{"../utility/logging.js":7}]},{},[5]);
