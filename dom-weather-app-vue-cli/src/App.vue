<template>
  <div class="flex items-center justify-center w-full h-full font-mono bg-slate-500" id="container">
    <div class="rounded-md h-5/6 w-96 lg:max-w-1/5 bg-zinc-400 relative" :class="{ 'opacity-50': isLoading }">
      <div id="heading" class="flex items-center justify-center w-full h-1/6">
        <h2>The best weather app</h2>
      </div>
      <dayNight />
      <weatherInformation />
      <actionInput />
    </div>
  </div>
</template>

<script>
import dayNight from './components/dayNight.vue';
import weatherInformation from "@/components/weatherInformation.vue";
import actionInput from "@/components/actionInput.vue";
import store from './vuex/store.js';
import './assets/tailwind.css';

export default {
  name: 'App',
  components: { dayNight, weatherInformation, actionInput },
  computed: {
    isLoading: function() {
        return store.getters.isLoading;
    }
  }
}
</script>