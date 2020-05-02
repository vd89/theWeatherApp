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
      const min = list.map((i) => ui.getKelToCel(i.main.temp_min));
      const max = list.map((i) => ui.getKelToCel(i.main.temp_max));

      //   console.log(min, max);
      setTimeout(() => {
        ui.showLineChart(temp, city, dt);
      }, 1500);
      setTimeout(() => {
        ui.showMixChart(min, max, city, dt);
      }, 1500);
    });
  }
}

// Event Listener
submit.addEventListener('submit', findCity);
