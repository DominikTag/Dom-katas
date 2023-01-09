<template>
  <div v-if="isWeatherInformationVisible" id="background-image" class="w-full h-2/6 mb-4">
    <img v-if="isDay" src="../images/day.svg" alt="Day image">
    <img v-else src="../images/night.svg" alt="Night image">
  </div>
</template>

<script>
import store from '../vuex/store.js';
  export default {
    name: 'dayNight',
    computed: {
      isDay() {
        return store.getters.getWeatherInformation.isDay;
      },
      isWeatherInformationVisible() {
        return store.getters.isWeatherInformationVisible;
      }
    }
  }
</script>