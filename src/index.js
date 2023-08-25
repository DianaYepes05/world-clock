setInterval(() => {

// Los Angeles

let losAngeles = document.querySelector("#los-angeles");
let losAngelesDate = losAngeles.querySelector(".date");
let losAngelesTime = losAngeles.querySelector(".time");
let currentTimeLA = moment().tz("America/Los_Angeles");

losAngelesDate.innerHTML = currentTimeLA.format("MMMM Do YYYY");
losAngelesTime.innerHTML = `${currentTimeLA.format(
  'h:mm:ss'
)} <small>${currentTimeLA.format('A')}</small>`;


// Sydney

let sydney = document.querySelector("#sydney");
let sydneyDate = sydney.querySelector(".date");
let sydneyime = sydney.querySelector(".time");
let currentTimeSydney = moment().tz("Australia/Sydney");

sydneyDate.innerHTML = currentTimeSydney.format("MMMM Do YYYY");
sydneyime.innerHTML = `${currentTimeSydney.format(
  "h:mm:ss"
)} <small>${currentTimeSydney.format("A")}</small>`;

  
}, 1000);
