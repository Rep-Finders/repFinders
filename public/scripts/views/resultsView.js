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
      } else {
        $('#ccResults').append(official.toHtml());
      }
      $('.tabContent').hide();
      $('#resultsDisplay').show();
      $('.repData').show();
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

  module.resultsView = resultsView;
})(window);



// Official.all.forEach(function(official) {
// })
// $('#resultsBox').append(template(official))
// if(Official.div === federal)
//   append to federal div
