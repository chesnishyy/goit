/**
 * Created by agent on 17.10.2016.
 */

// 1. повесить обработчик событий
// при клике создавать html и ставить в дом

(function ($) {

    $.fn.fancybox = function (options) {

        var defaults = {
            overlayColor: 'black',
            fontSize: '13px'
        };

        var settings = $.extend(defaults, options);


        var $link = this;

        var $body = $('body');

        var $overlay;
        var $modal;

        function showModal(e) {

            var href = $link.attr('href');
            $modal = $('<div class="fancybox-modal"><img src="' + href +'"><p style="font-size: ' +settings.fontSize +';"> some text</p></div>');

            $overlay = $('<div class="fancybox-overlay"> </div>');
            $overlay.css({
                'background-color': settings.overlayColor
            });

            e.preventDefault();

            $body.append($overlay);
            $body.append($modal);
            $overlay.one('click', hideModal);

        }
        
        function hideModal() {
            $modal.remove();
            $overlay.remove();
        }
        
        $link.on('click', showModal);


        return this;
    }

})(jQuery);