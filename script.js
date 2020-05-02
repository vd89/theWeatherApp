let weather = new Weather();
let ui = new UI();

let cityName = document.getElementById('cityName');
let submit = document.getElementById('submit');

function findCity(e) {
  e.preventDefault();
  let cName = cityName.value;
  if (cName !== '') {
    weather.findCity(cName).then((data)=> {
      const { city, list } = data.getForecast;
    ui.showDetails(city);
    const temp = list.map((i) => ui.getKelToCel(i.main.temp));
    const dt = list.map((i) => i.dt_txt.split(' '));
    setTimeout(() => {
      ui.showLineChart(temp, city, dt);
    }, 500)
    }).catch((err) => {
      ui.clearCityName()
      cityName.innerHTML = ""
      ui.showAlert("Please provid the valid city name", 'alert alert-danger')
    })
  } else {
    ui.clearCityName()
    ui.showAlert("Please provide a input City ", 'alert alert-primary')
  }
}

// Event Listener
submit.addEventListener('submit', findCity);
