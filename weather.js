const WeatherAPI = 'ee4102e4815321c59c6bf45bd915082c'
const url = `http://api.openweathermap.org/data/2.5/forecast?q=`;


const getForecast = (cityName) => {
    const apiCall = `${url}${cityName}&APPID=${WeatherAPI}`;
    return axios.get(apiCall)
}


