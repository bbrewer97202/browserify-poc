var someSharedComponent = (function() {

	function init() {

		var something = $('<div data-placement="right" title="Tooltip on right">someSharedComponent</div>');
		$('#content').append(something); //use jquery 
		something.tooltip(); //use bootstrap
	}

	return {
		init: init
	}
})();

module.exports = someSharedComponent;