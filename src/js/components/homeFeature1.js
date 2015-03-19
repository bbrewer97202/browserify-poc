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