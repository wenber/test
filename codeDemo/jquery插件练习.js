;
/**
 * jquery 插件练习
 */

(function($) {
	$.fn.extend({
		pluginList: function(opt) {

			defaults = {
				"name": "liuming"
			};

			opt = $.extend(true,defaults, opt);

			return this.each(function() {
				var currItem = $(this);

				currItem.bind("click", function(e) {
					// e.preventDefault();
					alert(opt.name);
				});



			});

		}
	});
})(jQuery);