'use strict';

(function(module){

  const resultsView = {};

  resultsView.index = function (){
    //tohtml
    //hide all
    //show city section
  }

  resultsView.viewCounty = function(){
    //hide other sections
    //show county section
  }

  resultsView.viewCity = function () {
    $('.results-divs').hide();
    $('#results-city').fadeIn();
  }

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
