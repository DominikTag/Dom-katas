<template>
  <div v-if="isWeatherInformationVisible" id="weather-conditions" class="w-full h-2/6">
    <div class="w-full h-1/2 grid grid-cols-2 gap-2 p-3 flex items-center justify-center mb-3">
      <div id="icon-and-phrase" class="tooltip block m-auto w-full shadow-2xl bg-slate-200 rounded-md h-full">
        <img class="m-auto" :src="getImgPath(weatherIcon)" width="75" height="75">
        <p class="text-center text-lg">{{iconPhrase}}</p>
        <span class="tooltip-text tooltip-left">Weather conditions</span>
      </div>
      <div id="precipation" class="tooltip flex items-center justify-center w-full shadow-2xl bg-slate-200 rounded-md h-full">
        <p class="text-center text-xl">{{precipitationProbability}}%</p>
        <span class="tooltip-text tooltip-right">Precipitation probability</span>
      </div>
    </div>
    <div class="w-full h-1/2 grid grid-cols-2 gap-2 p-3 flex items-center justify-center mb-3">
      <div id="temperature" class="tooltip flex items-center justify-center w-full shadow-2xl bg-slate-200 rounded-md h-full">
        <p v-if="temperatureInCelsius" class="text-center text-xl">{{temperatureInCelsius}}&deg;C</p>
        <span class="tooltip-text tooltip-left">Temperature</span>
      </div>
      <div id="time" class="tooltip block m-auto w-full shadow-2xl bg-slate-200 rounded-md h-full">
        <div class="flex items-center justify-center w-full h-1/2">
          <p class="text-center text-lg">{{forecastDateAndTime.forecastDate}}</p>
        </div>
        <div class="flex items-center justify-center w-full h-1/3">
          <p class="text-center text-lg">{{forecastDateAndTime.forecastTime}}</p>
        </div>
        <span class="tooltip-text tooltip-right">Date and time of forecast</span>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store.js';
import transformators from "../helpers/transformators.js";
  export default {
    name: 'weatherInformation',
    methods: {
      getImgPath(imgId) {
        return require('../images/icons/' + imgId + '.svg');
      }
    },
    computed: {
      isWeatherInformationVisible() {
        return store.getters.isWeatherInformationVisible;
      },
      weatherIcon() {
        return store.getters.getWeatherInformation.weatherIcon;
      },
      iconPhrase() {
        return store.getters.getWeatherInformation.iconPhrase;
      },
      precipitationProbability() {
        return store.getters.getWeatherInformation.precipitationProbability;
      },
      temperatureInCelsius() {
        const temperatureInFahrenheits = store.getters.getWeatherInformation.temperatureInFahrenheits;

        return transformators.fahrenheitToCelsius(temperatureInFahrenheits);
      },
      forecastDateAndTime() {
        const dateOfForecast = store.getters.getWeatherInformation.dateOfForecast;

        return transformators.unixDateToRegularDate(dateOfForecast);
      }
    }
  }
</script>

<style>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip-text {
  visibility: hidden;
  background-color: inherit;
  color: black;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  width: 120px;
}

.tooltip-left {
  top: 20px;
  right: 115%;
}

.tooltip-right {
  top: 20px;
  left: 115%;
  width: 170px;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
}
</style>