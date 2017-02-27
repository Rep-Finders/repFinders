'use strict';

// const googleKey = 'AIzaSyBn8LzF8dJrO19Q_DtaMEiq9MQXtMxW3sQ';
const googleKey = 'AIzaSyD8ekRODpXPsHFXHtxMrfQkV8e4ZqO6aEA';
let inputAddress = '98065';


function urOfficial(offTitle, name, div, email, phone, url, addr){
  this.title = offTitle,
  this.name = name,
  this.div = div,
  this.email = email,
  this.phone = phone,
  this.url = url,
  this.addr = addr
}
urOfficial.all = [];

$.ajax({
  url: `https://www.googleapis.com/civicinfo/v2/representatives?key=${googleKey}&address=${inputAddress}`,
  method: 'GET',
  complete: (data) => {
    // let offices = data.responseJSON.offices;
    let officials = data.responseJSON.officials;
return console.log(data);
    data.responseJSON.offices.map((office) => {

      office.officialIndices.map((ind) => {
        if (!officials[ind].email) {
          officials[ind].email = 'none';
        }
        urOfficial.all.push(new urOfficial(office.name, officials[ind].name, office.divisionId, officials[ind].emails, officials[ind].phones, officials[ind].url, officials[ind].address))

      })
    })
  }
})
