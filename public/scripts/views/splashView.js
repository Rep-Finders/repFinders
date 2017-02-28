'use strict';

//THIS WAS USED TO TEST HB FUNCTIONALITY
// var source   = $("#entry-template").html();
// var template = Handlebars.compile(source);
//
// var context = {title: "My New Post", body: "This is my first post!"};
// // return template(context);
// $('#testHB').append(template(context))
(function(module){
  const splashView = {};

  splashView.index = function () {
    //render page
  }

  module.splashView = splashView;
})(window);
