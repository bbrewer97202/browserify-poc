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