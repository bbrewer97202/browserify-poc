require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({6:[function(require,module,exports){
var $ = require('jquery');
var bootstrap = require('bootstrap');
var someSharedComponent = require('../components/someSharedComponent.js');
var uniqueFeature = require('../components/uniqueFeature.js');

someSharedComponent.init();
uniqueFeature.init();
},{"../components/someSharedComponent.js":3,"../components/uniqueFeature.js":4,"bootstrap":8,"jquery":9}],4:[function(require,module,exports){
var logging = require('../utility/logging.js');

var uniqueFeature = (function() {

	function init() {
		logging.log("uniqueFeature init");

		//demo use of jquery and bootstrap
		$('#content').append('<div id="egModal" class="modal fade"><div class="modal-dialog"><div class="modal-content">Example Modal</div></div></div>');
		var instance = $('<button class="btn btn-primary">uniqueFeature</button>');
		instance.on('click', onButtonClick);
		$('#content').append(instance);
	}

	function onButtonClick(e) {
		e.preventDefault();
		$('#egModal').modal();
	}

	return {
		init: init
	}
})();

module.exports = uniqueFeature;
},{"../utility/logging.js":7}]},{},[6]);
