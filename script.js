let weather = new Weather()
let ui = new UI();

let cityName = document.getElementById('cityName');
let submit = document.getElementById('submit');

function findCity(e) {
  e.preventDefault();
  let cName = cityName.value;
    if (cName!=="") {
        weather.findCity(cName).then((data) => {
            const {city,list} = data.getForecast
            ui.showDetails(city)
            console.log(typeof list);
            ui.showLineChart(list,city)
        })        
    }
}
// Event Listener
submit.addEventListener('submit', findCity);
