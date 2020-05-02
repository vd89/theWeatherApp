class Weather {
  constructor() {
    this.WeatherAPI = 'ee4102e4815321c59c6bf45bd915082c';
    this.url = `http://api.openweathermap.org/data/2.5/forecast?q=`;
  }
  async findCity(cityName) {
    const weatherResponse = await axios
      .get(`${this.url}${cityName}&APPID=${this.WeatherAPI}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        ui.showAlert("Please provide a valid City",'alert alert-danger')
      });
    const getForecast = weatherResponse;
    return {
      getForecast,
    };
  }
}
