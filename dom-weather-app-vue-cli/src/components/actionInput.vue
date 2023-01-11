<template>
  <div class="w-full h-1/6 flex items-center justify-center absolute bottom-0">
    <input
        v-model="inputValue"
        @keyup.enter="loadAndDisplayNewData"
        type="text"
        class="h-1/3 w-4/5 text-sm pl-2 rounded-md focus:outline-none"
        placeholder="Type city name and press enter"
    >
  </div>
</template>

<script>
import store from '../vuex/store.js';
import weatherAPI from "@/helpers/weatherAPI";
  export default {
    name: 'actionInput',
    data() {
      return {
        inputValue: '',
      }
    },
    methods: {
      async loadAndDisplayNewData() {
        store.commit('setIsLoading', true);

        setTimeout(async () => {
          await this.updateWeatherInformation();
          await this.setWeatherInfoIsVisible();

          store.commit('setIsLoading', false);
        }, 500);

      },
      async updateWeatherInformation() {
        const cityId = await weatherAPI.getCityId(this.inputValue);
        const weatherInfo = await weatherAPI.getWeatherInformation(cityId);

        store.commit('updateWeatherInformation', weatherInfo);
      },
      setWeatherInfoIsVisible() {
        store.commit('setWeatherInformationVisible', true);
      }
    }
  }
</script>