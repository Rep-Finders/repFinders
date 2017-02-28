'use strict';

let viewController = {};

viewController.handleNav = function() {
  $('.mainNav').on('click', '.activeTab', function(){
    $('.tabContent').hide();
    $('#' + $(this).data('section') + 'Display').fadeIn();
  });
  $('.mainNav .activeTab:first').click();
};

viewController.handleNav();
