'use strict';

(function(module){
  const splashController = {};

  splashController.init = () => {
    splashView.index();
  }

  module.splashController = splashController;
})(window);
