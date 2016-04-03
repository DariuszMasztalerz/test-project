/**
 *  Example Function module
 */
'use strict';
require('jquery-colorbox');

var colorbox = {
  init: function () {
    var $images = $('a[data-colorbox]');
    var colorbox;

    $(document).bind('cbox_open', function() {
      changeImages();
    });

    $(document).bind('cbox_closed', function() {
      $.colorbox.close();
      $(document).unbind('cbox_open');
      $(document).unbind('cbox_closed');
    });



    $(document).ready(function() {
      colorbox = $images.colorbox({
        rel: 'gal',
        width: '50%',
        height: '50%',
        open: true
      });


    });

    function changeImages() {
      var count = 0;
      var interval = setInterval(function() {
        $.colorbox.next();
        count += 1;

        if(count == 4) {
          $.colorbox.close();
          clearInterval(interval);
        }
      } , 2000);
    }
  }
};

module.exports = colorbox;
