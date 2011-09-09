/*!
 * jQuery Gridsystem Plugin
 * https://github.com/rimien/jquery-gridsystem
 *
 * Copyright 2011
 * https://github.com/rimien/jquery-gridsystem/blob/master/LICENSE
 *
 */
(function($) {
	$.fn.gridsystem = function(options) {

		// default settings
		var settings = {
			'gridWidth' : 960,
			'cols' : 12,
			'gutterWidth' : 20,
			'rowHeight' : 18,
			'offsetY': 9,
			'colStyle' : 'rgba(255, 0, 0, 0.05)',
			'rowStyle' : 'rgba(0, 0, 255, 0.1)'
		};

		return this
				.each(function() {
					if (options)
						$.extend(settings, options);
					var $this = $(this);

					
					var colWidth = (settings.gridWidth / settings.cols)
							- settings.gutterWidth;
					var docHeight = document.body.clientHeight > window.innerHeight ? document.body.clientHeight
							: window.innerHeight;

					if (location.hash.indexOf('grid') == -1)
						return;

					// create the grid
					var pos = $this.position();
					$('body').append(
							"<canvas id='grid' style='position: absolute; left: "
									+ pos.left + "px; top: " + pos.top
									+ "px;' width='" + settings.gridWidth
									+ "' height='" + docHeight + "'></canvas>");
					var ctx = $('#grid')[0].getContext("2d");

					// cols
					if (location.hash.indexOf('gridy') == -1) {
						var x = settings.gutterWidth / 2;
						ctx.fillStyle = settings.colStyle;
						for ( var i = 0; i <= settings.cols; i++) {
							ctx.fillRect(x, 0, colWidth, docHeight);
							x = x + colWidth + settings.gutterWidth;
						}
					}

					// rows
					if (location.hash.indexOf('gridx') == -1) {
						var y = settings.offsetY;
						ctx.fillStyle = settings.rowStyle;
						for ( var i = 0; i <= docHeight / settings.rowHeight; i++) {
							y = y + settings.rowHeight;
							ctx.fillRect(0, y, settings.gridWidth, 1);
						}
					}

				});

	};
})(jQuery);