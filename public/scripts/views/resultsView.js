'use strict';

(function(module){

  const resultsView = {};

  resultsView.index = function (){
    //render results?
    $('.resultsNav').on('click', '.repDataButton', function(){
      $('.repData').hide();
      $('#' + $(this).data('section') + 'Results').fadeIn();
    });
    $('.resultsNav .repDataButton:first').click();
  };

  resultsView.index();

  module.resultsView = resultsView;
})(window);
//
// let viewController = {};
//
// viewController.handleNav = function() {
//   $('.mainNav').on('click', '.activeTab', function(){
//     $('.tabContent').hide();
//     $('#' + $(this).data('section') + 'Display').fadeIn();
//   });
//   $('.mainNav .activeTab:first').click();
// };
//
// viewController.handleNav();
