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