let weather = new Weather();
let ui = new UI();

let cityName = document.getElementById('cityName');
let submit = document.getElementById('submit');

function findCity(e) {
  e.preventDefault();
  let cName = cityName.value;
  if (cName !== '') {
      weather.findCity(cName).then((data) => {
      const { city, list } = data.getForecast;
      ui.showDetails(city);
      const temp = list.map((i) => ui.getKelToCel(i.main.temp));
      const dt = list.map((i) => i.dt_txt.split(' '));
      setTimeout(() => {
        ui.showLineChart(temp, city, dt);
      }, 500);
    });
  } else {
      ui.clearCityName()
      ui.showAlert("please provide the valid city name",'alert alert-danger')
  }
}

// Event Listener
submit.addEventListener('submit', findCity);
