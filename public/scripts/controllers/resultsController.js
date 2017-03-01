'use strict';

(function(module){
  const resultsController = {};

  resultsController.init = function (){
    results.fetchAll(resultsView.filter);
  }

  module.resultsController = resultsController;
})(window);
