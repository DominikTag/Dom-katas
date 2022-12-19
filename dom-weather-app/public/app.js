const cityInput = document.querySelector('#city-input');
const startButton = document.querySelector('#startButton');

const apiKey = 'kUfkPA9VVU5407oDJWDoh2T10ZALToRm';

const allWeatherInformation = async () => {
    const cityDetails = await getCity(cityInput.value);
    const weatherConditions = await getWeather(cityDetails.cityID);

    return {
        isDay: weatherConditions[0].IsDaylight,
        temperatureInFahrenheits: weatherConditions[0].Temperature.Value,
        iconPhrase: weatherConditions[0].IconPhrase,
        weatherIcon: weatherConditions[0].WeatherIcon
    }
}

startButton.addEventListener('click', async () => {
    updateUI(
        (await allWeatherInformation()).isDay,
        (await allWeatherInformation()).temperatureInFahrenheits,
        (await allWeatherInformation()).iconPhrase,
        (await allWeatherInformation()).weatherIcon
    );
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

function updateUI(isDay, temperatureInFahrenheits, iconPhrase, weatherIcon) {
    changeBackground(isDay);
    updateTemperature(fahrenheitToCelsius(temperatureInFahrenheits));
    updateWeatherConditionsAndIcons(iconPhrase, weatherIcon);
}

function changeBackground (isDayTime) {

    const background = document.querySelector('.background');

    if(isDayTime) {
        background.setAttribute('src', 'images/day.svg');
    } else {
        background.setAttribute('src', 'images/night.svg');
    }
}

function updateTemperature (valueInCelsius) {
    const temperature = document.querySelector('.temperature');

    temperature.innerHTML = `${valueInCelsius}&deg;C`;
}

function fahrenheitToCelsius (valueInFahrenheit) {
    let fahrenheitTemperature = parseFloat(valueInFahrenheit);

    return (Math.round(fahrenheitTemperature - 32) / 1.8).toFixed(0);
}

function updateWeatherConditionsAndIcons (iconPhrase, weatherIcon) {
    const conditions = document.querySelector('.conditions');
    const icon = document.querySelector('.weather-icon');


    conditions.innerHTML = iconPhrase;
    icon.setAttribute('src', `images/icons/${weatherIcon}.svg`);
}
