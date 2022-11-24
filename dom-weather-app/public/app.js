const cityInput = document.querySelector('#city-input');
const temperature = document.querySelector('.temperature');
const dayOrNight = document.querySelector('.time');
const conditions = document.querySelector('.conditions');
const icon = document.querySelector('.weather-icon');
const errorMessage = document.querySelector('#error');

const apiKey = 'qGLMGbgG2tHUnaRGFoJIvHMul7t55Esr';


let timeout = null;

cityInput.addEventListener('keyup', () => {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
        getCity(cityInput.value);
    }, 2000);
})

const getCity = async (inputValue) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${inputValue}`;

    const response = await fetch(base + query)
    .catch()
    const data = await response.json();

    return getWeather(data[0].Key);
}

const getWeather = async (cityKey) => {
    const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
    const query = `${cityKey}?apikey=${apiKey}`;
    
    const response = await fetch(base + query);
    const data = await response.json();

    return updateUI(data);
}

async function updateUI(weatherObject) {
    // update day/night background
    dayNight(whatHourIsIt());
    const dayTime = dayNight(whatHourIsIt());

    // update temperature
    const maxTemp = weatherObject.DailyForecasts[0].Temperature.Maximum.Value;
    const minTemp = weatherObject.DailyForecasts[0].Temperature.Minimum.Value;
    let avgFahrenheit = (maxTemp + minTemp) / 2;
    let avgFahrenheitNumber = parseFloat(avgFahrenheit);
    let celsius = (Math.round(avgFahrenheitNumber - 32) / 1.8).toFixed(0);
    
    temperature.innerHTML = `${celsius}&deg;C`;


    
    // update weather conditions and icons
    let iconFromWeatherApi;

    if(dayTime === 'Day') {
        conditions.innerHTML = weatherObject.DailyForecasts[0].Day.IconPhrase;
        iconFromWeatherApi = weatherObject.DailyForecasts[0].Day.Icon;
    } else {
        conditions.innerHTML = weatherObject.DailyForecasts[0].Night.IconPhrase;
        iconFromWeatherApi = weatherObject.DailyForecasts[0].Night.Icon;
    }

    icon.setAttribute('src', `images/icons/${iconFromWeatherApi}.svg`);
}

function whatHourIsIt() {
    const date = new Date();
    return date.getHours() + 1;
}

function dayNight(timeInHours) {
    let timeSrc = null;
    let time;
    if(timeInHours >= 6 && timeInHours < 18) {
        timeSrc = 'images/day.svg';
        time = 'Day';
    } else {
        timeSrc = 'images/night.svg';
        time = 'Night';
    }
    dayOrNight.setAttribute('src', timeSrc);

    return time;
}