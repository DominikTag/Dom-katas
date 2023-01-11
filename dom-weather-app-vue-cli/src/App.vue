<template>
  <div class="flex items-center justify-center w-full h-full font-mono bg-slate-500">
    <div class="rounded-md h-5/6 w-96 lg:max-w-1/5 bg-zinc-400 relative" :class="{ 'transition opacity-50 duration-500': isLoading }">
      <div class="flex items-center justify-center w-full h-1/6">
        <h2>The best weather app</h2>
      </div>
      <BackgroundDayNight />
      <weatherInformation />
      <actionInput />
    </div>
  </div>
</template>

<script>
import BackgroundDayNight from './components/BackgroundDayNight.vue';
import weatherInformation from "@/components/weatherInformation.vue";
import actionInput from "@/components/actionInput.vue";
import './assets/tailwind.css';

export default {
  name: 'App',
  components: { BackgroundDayNight, weatherInformation, actionInput },
  computed: {
    isLoading: function() {
        return this.$store.state.isLoading;
    }
  }
}
</script>