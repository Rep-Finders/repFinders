'use strict';

(function(module){
  const aboutView = {};

  aboutView.init = function(){
    $('.tabContent').hide()
    $('#aboutDisplay').show();
  }

  module.aboutView = aboutView;
})(window);
