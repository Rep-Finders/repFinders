'use strict';

(function(module){
  const resultsController = {};

  resultsController.init = function (){
    results.fetchAll(resultsView.index);
  }

  module.resultsController = resultsController;
})(window);
