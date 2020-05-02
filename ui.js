class UI {
  constructor() {
    this.cityDetail = document.getElementById('cityDetail');
    this.myChart = document.getElementById('myChart').getContext('2d')
  }

  showDetails(city) {
    this.cityDetail.innerHTML = `
        <div class="card card-body mb-3">
        <div class=" card-title"> <h4>${city.name}</h4></div>
        <div class="card-body">
        <h4 class="card-title"> Country: ${city.country} </h4>    
        <p class="card-text">Population: ${city.population} </p>
        <p class="card-text">Location: Lat: ${city.coord.lat}, Lon: ${city.coord.lon} </p>
        </div>
  </div>
        `;
  }
  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  clearCityName() {
    this.cityDetail.innerHTML = '';
  }

  
  showLineChart(list,city) {
    let lineChart = new Chart(myChart, {
      type: 'line',
      data: {
        labels: list,
        datasets: [{
          label: `The Temperature of ${city.name}`,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: list
        }]
      }
    })
  }
}
