function updateTime() {
  // Los Angeles

  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  let currentTimeLA = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = currentTimeLA.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = `${currentTimeLA.format(
    "h:mm:ss"
  )} <small>${currentTimeLA.format("A")}</small>`;

  // Sydney

  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyime = sydney.querySelector(".time");
  let currentTimeSydney = moment().tz("Australia/Sydney");

  sydneyDate.innerHTML = currentTimeSydney.format("MMMM Do YYYY");
  sydneyime.innerHTML = `${currentTimeSydney.format(
    "h:mm:ss"
  )} <small>${currentTimeSydney.format("A")}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cities = document.querySelector("#cities");
  cities.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
