const apiKey = '9zb4wwoGFBeeSG5UonWlGPevCzCaXlRq';
const cityBaseUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search';
const weatherBaseUrl = 'https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/';

const weatherAPI = {
    async getCityId(cityName) {
        const url = `${cityBaseUrl}?apikey=${apiKey}&q=${cityName}`;

        const response = await fetch(url)
            .catch(err => {
                console.error(err);
            })
        const data = await response.json();
        return data[0].Key;  // returns ctyId needed to get weather information
    },
    async getWeatherInformation(cityId) {
        const url = `${weatherBaseUrl}${cityId}?apikey=${apiKey}`;

        const response = await fetch(url)
            .catch(err => {
                console.error(err);
            });
        const weatherData = await response.json();

        return {
            isDay: weatherData[0].isDayLight,
            temperatureInFahrenheits: weatherData[0].Temperature.Value,
            weatherIcon: weatherData[0].WeatherIcon,
            iconPhrase: weatherData[0].IconPhrase,
            dateOfForecast: weatherData[0].EpochDateTime,
            precipitationProbability: weatherData[0].PrecipitationProbability
        }
    }
}

export default weatherAPI;