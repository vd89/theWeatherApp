class UI {
  constructor() {
    this.cityDetail = document.getElementById('cityDetail');
    this.myChartLine = document.getElementById('myChartLine').getContext('2d');

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
    this.myChartLine.innerHTML=''
  }
  getKelToCel(temp) {
    const kelToCel = 273.15;
    const temInCal = temp - kelToCel;
    return temInCal.toFixed(2);
  }
  showLineChart(list, city, dt) {
    let lineChart = new Chart(myChartLine, {
      type: 'bar',
      data: {
        labels: dt,
        datasets: [
          {
            label: `The Temperature of ${city.name}`,
            backgroundColor: 'rgb(255, 99, 132)',
            data: list,
            order:1
          },
          {
            label: `The Temperature of ${city.name}`,
            data: list,
            borderColor: 'rgba(54, 162, 235, 1)',
            type: 'line',
            order:2
          },
         
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  
}
