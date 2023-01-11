<template>
  <div v-if="$store.state.weatherInformationVisible" class="w-full h-2/6">
    <div class="w-full h-1/2 grid grid-cols-2 gap-2 p-3 flex items-center justify-center mb-3">
      <div class="tooltip block m-auto w-full shadow-2xl bg-slate-200 rounded-md h-full">
        <img class="m-auto" :src="getImgPath($store.state.weatherInformation.weatherIcon)" width="75" height="75">
        <p class="text-center text-lg">{{$store.state.weatherInformation.iconPhrase}}</p>
        <span class="tooltip-text tooltip-left">Weather conditions</span>
      </div>
      <div class="tooltip flex items-center justify-center w-full shadow-2xl bg-slate-200 rounded-md h-full">
        <p class="text-center text-xl">{{$store.state.weatherInformation.precipitationProbability}}%</p>
        <span class="tooltip-text tooltip-right">Precipitation probability</span>
      </div>
    </div>
    <div class="w-full h-1/2 grid grid-cols-2 gap-2 p-3 flex items-center justify-center mb-3">
      <div class="tooltip flex items-center justify-center w-full shadow-2xl bg-slate-200 rounded-md h-full">
        <p v-if="temperatureInCelsius" class="text-center text-xl">{{temperatureInCelsius}}&deg;C</p>
        <span class="tooltip-text tooltip-left">Temperature</span>
      </div>
      <div class="tooltip block m-auto w-full shadow-2xl bg-slate-200 rounded-md h-full">
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
import { fahrenheitToCelsius } from "../helpers/transformators.js";
import { unixDateToRegularDate } from "../helpers/transformators.js";
  export default {
    name: 'weatherInformation',
    methods: {
      getImgPath(imgId) {
        return require('../images/icons/' + imgId + '.svg');
      }
    },
    computed: {
      temperatureInCelsius() {
        return fahrenheitToCelsius(this.$store.state.weatherInformation.temperatureInFahrenheits);
      },
      forecastDateAndTime() {
        return unixDateToRegularDate(this.$store.state.weatherInformation.dateOfForecast);
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