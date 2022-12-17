const cityInput = document.querySelector('#city-input');
const temperature = document.querySelector('.temperature');
const background = document.querySelector('.background');
const conditions = document.querySelector('.conditions');
const icon = document.querySelector('.weather-icon');

const apiKey = 'EPdJhXaeSuuAyzPqHlQcJboQyVosCoFQ';

let timeout = null;

cityInput.addEventListener('keyup', () => {
    clearTimeout(timeout);

    timeout = setTimeout(async function () {
        const cityDetails = await getCity(cityInput.value);
        const weatherObject = await getWeather(cityDetails.cityID);
        updateUI(weatherObject);
    }, 2000);
})

async function getCity (inputValue) {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${inputValue}`;

    const response = await fetch(base + query)
        .catch(err => {
            console.error(err);
        })
    const data = await response.json();

    return {cityID: data[0].Key};

}

async function getWeather (cityKey) {
    const base = 'https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/';
    const query = `${cityKey}?apikey=${apiKey}`;

    const response = await fetch(base + query)
        .catch(err => {
            console.error(err);
        });
    const weatherData = await response.json();

    return weatherData;
}

function updateUI(weatherObject) {
    changeBackground(weatherObject);
    updateTemperature(weatherObject);
    updateWeatherConditionsAndIcons(weatherObject);
}

function changeBackground (weatherObject) {
    const isDay = weatherObject[0].IsDaylight;  // return true or false

    if(isDay) {
        background.setAttribute('src', 'images/day.svg');
    } else {
        background.setAttribute('src', 'images/night.svg');
    }
}

function updateTemperature (weatherObject) {
    let fahrenheitTemperature = parseFloat(weatherObject[0].Temperature.Value);
    let celsius = (Math.round(fahrenheitTemperature - 32) / 1.8).toFixed(0);

    temperature.innerHTML = `${celsius}&deg;C`;
}

function updateWeatherConditionsAndIcons (weatherObject) {
    let iconFromWeatherApi;

    conditions.innerHTML = weatherObject[0].IconPhrase;
    iconFromWeatherApi = weatherObject[0].WeatherIcon;

    icon.setAttribute('src', `images/icons/${iconFromWeatherApi}.svg`);
}
