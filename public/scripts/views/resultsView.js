'use strict';

(function(module){

  const resultsView = {};

  resultsView.index = function() {
    //render results?
    Official.all.forEach(function(official){
      console.log('about to call toHtml');
      $('#resultsBox').append(official.toHtml())
    })
  };

  resultsView.filter = function() {
    //this needs to go somewhere else, just an idea
    // $('.resultsNav').on('click', function() {
    //   let selectedDivLevel = $(this).id? //get the id of the tab you click
    //   resultsView.filter(selectedDivLevel)
    // })

    // $('#resultsBox').empty();
    let allOfficials = Official.all;
    let selectedDivLevel = 'country'; //will need to be dynamic based on tab they click, then delete this.

    let filteredOfficials = allOfficials.filter(function(official) {
      console.log(selectedDivLevel);
      return (official.divFormatted.divLevel === selectedDivLevel);
    })
    filteredOfficials.forEach(function(official){
      $('#federalResults').append(official.toHtml());
    })

    selectedDivLevel = 'state'; //will need to be dynamic based on tab they click, then delete this.

    filteredOfficials = allOfficials.filter(function(official) {
      console.log(selectedDivLevel);
      return (official.divFormatted.divLevel === selectedDivLevel);
    })
    filteredOfficials.forEach(function(official){
      $('#stateResults').append(official.toHtml());
    })

    selectedDivLevel = 'county'; //will need to be dynamic based on tab they click, then delete this.

    filteredOfficials = allOfficials.filter(function(official) {
      console.log(selectedDivLevel);
      return (official.divFormatted.divLevel === selectedDivLevel);
    })
    filteredOfficials.forEach(function(official){
      $('#ccResults').append(official.toHtml());
    })

    $('#resultsBox').hide();
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
