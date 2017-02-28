'use strict';


(function(module){
// const googleKey = 'AIzaSyBn8LzF8dJrO19Q_DtaMEiq9MQXtMxW3sQ';
  const googleKey = 'AIzaSyD8ekRODpXPsHFXHtxMrfQkV8e4ZqO6aEA';
  let inputAddress = '98065';
  const results = {};

  function Official(offTitle, name, div, email, phone, url, addr, party){
    this.officeTitle = offTitle,
    this.name = name,
    this.division = div,
    this.email = email,
    this.phone = phone,
    this.url = url,
    this.address = addr,
    this.party = party
  }

  Official.all = [];

  results.fetchAll = function(callback){

    $.ajax({
      url: `https://www.googleapis.com/civicinfo/v2/representatives?key=${googleKey}&address=${inputAddress}`,
      method: 'GET',
      complete: (data) => {
        let officials = data.responseJSON.officials;
        //  console.log(data);
        data.responseJSON.offices.map((office) => {

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

            Official.all.push(new Official(office.name, officials[ind].name, office.divisionId, officials[ind].emails, officials[ind].phones[0], officials[ind].urls, officials[ind].address, officials[ind].party))

          })
        })
      }
    })
    .then( function(){
      console.log(Official.all);
      callback();
    }
    )

  }

  module.results = results;
  module.Official = Official;
})(window);
