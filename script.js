let cityName = document.getElementById('cityName');
let submit = document.getElementById('submit');
let ui = new UI();
let temp = document.getElementById('temp')

let myChart = document.getElementById('myChart').getContext('2d')
let lineChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    }
})

function findCity(e) {
  e.preventDefault();
  let cName = cityName.value;
  getForecast(cName)
      .then((res) => {
        const { list, city } = res.data;
        ui.showDetails(city);       
    })
    .catch((err) => {
        ui.showAlert('City not found', 'alert alert-danger')
        ui.cityDetails()
    });
  cityName.innerHTML = '';
}
// Event Listener
submit.addEventListener('submit', findCity);
