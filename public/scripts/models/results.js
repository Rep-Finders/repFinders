'use strict';


(function(module){
// const googleKey = 'AIzaSyBn8LzF8dJrO19Q_DtaMEiq9MQXtMxW3sQ';
  const googleKey = 'AIzaSyD8ekRODpXPsHFXHtxMrfQkV8e4ZqO6aEA';
  let inputAddress = '98065';
  const results = {};


  function Official(offTitle, name, div, email, phone, url, addr, party, divFormatted) {
    this.title = offTitle,
      this.name = name,
      this.div = div,
      this.email = email,
      this.phone = phone,
      this.url = url,
      this.addr = addr,
      this.party = party,
      this.divFormatted = divFormatted;
  }
  Official.all = [];

  results.fetchAll = function(callback){
    $.ajax({
      url: `https://www.googleapis.com/civicinfo/v2/representatives?key=${googleKey}&address=${inputAddress}`,
      method: 'GET',
      complete: (data) => {
        let officials = data.responseJSON.officials;
        let offices = data.responseJSON.offices;

        offices.map((office) => {
          let divFormatted = results.formatDivision(office); // breaks down weird division string into an object that is easier to work with.

          office.officialIndices.map((ind) => {
            //TODO: clean up this function. If else is sloppy.
            if (!officials[ind].emails) {
              officials[ind].emails = 'none';
            } else {
              officials[ind].emails = officials[ind].emails[0];
            }
            if (!officials[ind].urls) {
              officials[ind].urls = 'none';
            } else {
              officials[ind].urls = officials[ind].urls[0];
            }
            if (!officials[ind].address) {
              officials[ind].address = 'none';
            } else {
              officials[ind].address = officials[ind].address[0];
            }

            Official.all.push(new Official(office.name, officials[ind].name, office.divisionId, officials[ind].emails, officials[ind].phones[0], officials[ind].urls, officials[ind].address, officials[ind].party, divFormatted))

          })//end office officialIndices.map
        })//end offices.map
      }//end of complete setting
    })//end ajax
    .then(function(){
    console.log(Official.all);
    callback();
    })//end .then
  }//end fetchAll

  results.formatDivision = function(office) {
    let divFormatted = {};
    office.divisionId.split('/')
      .filter(function (sequence, index, self) {
        return (sequence === self[self.length - 1]);
      }).toString().split(':')
      .forEach(function (divisionPair, index, self) {
        divFormatted.divLevel = self[0];
        if (self.indexOf('state') !== -1 || self.indexOf('country') !== -1) {
          divFormatted.divName = self[1].toUpperCase();
          return;
        }
        divFormatted.divName = self[1].slice(0, 1).toUpperCase() + self[1].slice(1);
      });
    return divFormatted
  }

  module.results = results;
  module.Official = Official;
})(window);
