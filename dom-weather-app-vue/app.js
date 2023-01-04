const app = Vue.createApp({
    data() {
        return {
            cityId: null,
            apiKey: '9zb4wwoGFBeeSG5UonWlGPevCzCaXlRq',
            inputValue: '',
            isLoading: false,
            weatherInformationVisible: false,
            weatherIconPath: '',
            forecastDate: null,
            forecastTime: null,
            temperatureInCelsius: null,
            weatherInformation: {},
            background: {dayImg: 'images/day.svg', nightImg: 'images/night.svg'}
        }
    },
    methods: {
        async loading() {
            const delay = ms => new Promise(res => setTimeout(res, ms));
            this.isLoading = true;
            await delay(1000);
            await this.updateUI();
            this.isLoading = false;
        },
        async updateUI() {
          await this.getCity();
          await this.getWeatherInformation();
          this.fahrenheitToCelsius();
          this.unixDateToRegularDate();
          this.createWeatherIconPath();
          this.weatherInformationVisible = true;
        },
        async getCity() {
            const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
            const query = `?apikey=${this.apiKey}&q=${this.inputValue}`;

            const response = await fetch(base + query)
                .catch(err => {
                    console.error(err);
                })
            const data = await response.json();

            this.cityId = data[0].Key;
            console.log(data[0].Key);
        },
        async getWeatherInformation() {
            const base = 'https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/';
            const query = `${this.cityId}?apikey=${this.apiKey}`;

            const response = await fetch(base + query)
                .catch(err => {
                    console.error(err);
                });
            const weatherData = await response.json();

            this.weatherInformation = {
                isDay: weatherData[0].isDayLight,
                temperatureInFahrenheits: weatherData[0].Temperature.Value,
                weatherIcon: weatherData[0].WeatherIcon,
                iconPhrase: weatherData[0].IconPhrase,
                dateOfForecast: weatherData[0].EpochDateTime,
                precipitationProbability: weatherData[0].PrecipitationProbability
            }

            console.log(weatherData);
        },
        fahrenheitToCelsius() {
            let fahrenheitTemperature = parseFloat(this.weatherInformation.temperatureInFahrenheits);
            let celsius = (Math.round(fahrenheitTemperature - 32) / 1.8);

            this.temperatureInCelsius = celsius.toFixed(0);
        },
        unixDateToRegularDate() {
            const unixTimestamp = this.weatherInformation.dateOfForecast;
            const date = new Date(unixTimestamp * 1000);

            this.forecastDate = `${date.toLocaleDateString('default')}`;
            this.forecastTime = `${date.toLocaleTimeString('default')}`;

        },
        createWeatherIconPath() {
            this.weatherIconPath = `images/icons/${this.weatherInformation.weatherIcon}.svg`
        }
    }
});
app.mount('#container');