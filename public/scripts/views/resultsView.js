'use strict';

(function(module){

  const resultsView = {};

  resultsView.index = function (){
    //render results?
    Official.all.forEach(function(official){
      console.log('about to call toHtml');
      $('#resultsBox').append(official.toHtml())
    })
};
  module.resultsView = resultsView;
})(window);



// Official.all.forEach(function(official) {
// })
// $('#resultsBox').append(template(official))
// if(Official.div === federal)
//   append to federal div



//   $('.resultsNav').on('click', '.repDataButton', function(){
//     $('.repData').hide();
//     $('#' + $(this).data('section') + 'Results').fadeIn();
//   });
//   $('.resultsNav .repDataButton:first').click();
// };
