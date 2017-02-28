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

  module.resultsView = resultsView;
})(window);
