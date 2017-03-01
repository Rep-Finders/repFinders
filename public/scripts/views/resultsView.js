'use strict';

(function (module) {

  const resultsView = {};

  resultsView.loadFromStorage = function(storedOfficials) {
    let rawOfficialsCollection = JSON.parse(storedOfficials);
    console.log(rawOfficialsCollection);

    rawOfficialsCollection.forEach(function (rawOfficialObj) {
      Official.all.push(new Official(rawOfficialObj.officeTitle, rawOfficialObj.name,
        rawOfficialObj.division,
        rawOfficialObj.email,
        rawOfficialObj.phone,
        rawOfficialObj.url,
        rawOfficialObj.address,
        rawOfficialObj.party,
        rawOfficialObj.divFormatted));
    });
  }

  //take Official objects and render them
  resultsView.index = function () {
    console.log('calling index');
    $('#resultsBox div').empty();
    Official.all.forEach(function (official) {
      if (official.divFormatted.divLevel === 'country') {
        $('#federalResults').append(official.toHtml());
      } else if (official.divFormatted.divLevel === 'state') {
        $('#stateResults').append(official.toHtml());
      } else if(official.divFormatted.divLevel === 'county') {
        $('#ccResults').append(official.toHtml());
      } 
      $('.tabContent').hide()
      $('#resultsDisplay').show();
      $('.repData').show()
    })
  }
  //Might be useful to refactor this repetition
  resultsView.viewFederal = function () {
    console.log('calling viewFederal');
    if (Official.all.length === 0) {
      resultsView.loadFromStorage(localStorage.officials);
      resultsView.index();
      resultsView.viewFederal();
    }
    $('.repData').hide()
    $('#federalResults').show();

  }

  resultsView.viewState = function () {
    console.log('calling viewState');
    if (Official.all.length === 0) {
      resultsView.loadFromStorage(localStorage.officials);
      resultsView.index();
      resultsView.viewState();
    }
    $('.repData').hide()
    $('#stateResults').show();
  }

  resultsView.viewCityCounty = function () {
    console.log('calling viewCityCounty');
    if (Official.all.length === 0) {
      resultsView.loadFromStorage(localStorage.officials);
      resultsView.index();
      resultsView.viewCityCounty();
    }
    $('.repData').hide()
    $('#ccResults').show();
  }



  // resultsView.index = function() {
  //   //render results?
  //   Official.all.forEach(function(official){
  //     console.log('about to call toHtml');
  //     $('#resultsBox').append(official.toHtml())
  //   })
  // };

  // resultsView.filter = function() {
  //   //this needs to go somewhere else, just an idea
  //   // $('.resultsNav').on('click', function() {
  //   //   let selectedDivLevel = $(this).id? //get the id of the tab you click
  //   //   resultsView.filter(selectedDivLevel)
  //   // })
  //
  //   // $('#resultsBox').empty();
  //   let allOfficials = Official.all;
  //   let selectedDivLevel = 'country'; //will need to be dynamic based on tab they click, then delete this.
  //
  //   let filteredOfficials = allOfficials.filter(function(official) {
  //     console.log(selectedDivLevel);
  //     return (official.divFormatted.divLevel === selectedDivLevel);
  //   })
  //   filteredOfficials.forEach(function(official){
  //     $('#federalResults').append(official.toHtml());
  //   })
  //
  //   selectedDivLevel = 'state'; //will need to be dynamic based on tab they click, then delete this.
  //
  //   filteredOfficials = allOfficials.filter(function(official) {
  //     console.log(selectedDivLevel);
  //     return (official.divFormatted.divLevel === selectedDivLevel);
  //   })
  //   filteredOfficials.forEach(function(official){
  //     $('#stateResults').append(official.toHtml());
  //   })
  //
  //   selectedDivLevel = 'county'; //will need to be dynamic based on tab they click, then delete this.
  //
  //   filteredOfficials = allOfficials.filter(function(official) {
  //     console.log(selectedDivLevel);
  //     return (official.divFormatted.divLevel === selectedDivLevel);
  //   })
  //   filteredOfficials.forEach(function(official){
  //     $('#ccResults').append(official.toHtml());
  //   })
  //
  //   // $('#resultsBox').fadeOut();
  // };
  //
  //
  // $('.resultsNav').on('click', '.repDataButton', function(){
  //   $('.repData').hide();
  //   $('#' + $(this).data('section') + 'Results').fadeIn();
  // });
  // $('.resultsNav .repDataButton:first').click();

  module.resultsView = resultsView;
})(window);



// Official.all.forEach(function(official) {
// })
// $('#resultsBox').append(template(official))
// if(Official.div === federal)
//   append to federal div
