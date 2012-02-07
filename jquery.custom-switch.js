/* 
Call the plugin with $('jquery-selector').customSwitch({ callback:function(on){  } });
*/

(function($) {
    var CustomSwitch = function(el, opts) {
        //Defaults are below
        var settings = $.extend({}, $.fn.customSwitch.defaults, opts),
        t = this, $el = $(el), on = 'on';

        // private methods
        function init() {
            $el.click(onSwitch);
            t.callback = settings.callback;
        }
        function onSwitch() {
            $el.toggleClass(on);
            $el.find('input').prop('checked', !$el.hasClass(on));
            t.callback($el.hasClass(on));
        }
        init();
    };
    $.fn.customSwitch = function(options) {
        return this.each(function(idx, el) {
            var $el = $(this), key = 'customSwitch';
            // Return early if this element already has a plugin instance
            if ($el.data(key)) { return; }
            // Pass options to plugin constructor
            var customSwitch = new CustomSwitch(this, options);
            // Store plugin object in this element's data
            $el.data(key, customSwitch);
        });
    };
    // default settings
    $.fn.customSwitch.defaults = { callback:function(){} };
})(jQuery);
