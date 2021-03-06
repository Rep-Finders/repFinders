'use strict';


(function (module) {

  const results = {};
  const GOOGLE_KEY = 'AIzaSyD8ekRODpXPsHFXHtxMrfQkV8e4ZqO6aEA';

  $('.zip-code-form button').on('click', function (e) {
    e.preventDefault();
    let $inputValue = $('.zip-code-form input').val();
    let inputValidity = validate($inputValue);
    localStorage.clear();
    if (inputValidity) {
      localStorage.inputAddress = $inputValue;
      window.location.href = '/results';
    } else {
      console.log('invalid');
      let inputBox = document.getElementById('zip');
      inputBox.setCustomValidity('Enter a Valid Zip Code or Address');
      inputBox.reportValidity();
    }

  });


  function Official(offTitle, name, div, email, phone, url, addr, party, divFormatted) {
    this.officeTitle = offTitle,
      this.name = name,
      this.division = div,
      this.email = email,
      this.phone = phone,
      this.url = url,
      this.address = addr,
      this.party = party,
      this.divFormatted = divFormatted;
  }
  Official.all = [];

  results.fetchAll = function (callback) {
    Official.all = [];
    console.log(localStorage.inputAddress)

    $.ajax({
      url: `https://www.googleapis.com/civicinfo/v2/representatives?key=${GOOGLE_KEY}&address=${localStorage.inputAddress}`,
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

            if (!officials[ind].phone) {
              officials[ind].phone = 'none';
            } else {
              officials[ind].phone = officials[ind].phone[0];
            }

            Official.all.push(new Official(office.name, officials[ind].name, office.divisionId, officials[ind].emails, officials[ind].phones, officials[ind].urls, officials[ind].address, officials[ind].party, divFormatted));


          })//end office officialIndices.map
        })//end offices.map
        localStorage.officials = JSON.stringify(Official.all);
      }//end of complete setting
    })//end ajax
      .then(function () {
        console.log(Official.all);
        callback();
      })//end .then
  }//end fetchAll

  Official.prototype.toHtml = function () {
    let source = $('#entry-template').html();
    let template = Handlebars.compile(source);
    return template(this);
  }

  function validate(inputValue) {
    console.log('calling validate', inputValue);
    let pattern = /^\d{5}$/g;
    let valid = inputValue.search(pattern);
    if (valid === -1) {
      return false;
    } else {
      return true;
    }
  }

  results.formatDivision = function (office) {
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
