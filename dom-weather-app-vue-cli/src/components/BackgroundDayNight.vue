<template>
  <div v-if="$store.state.weatherInformationVisible" class="w-full h-2/6 mb-4">
    <img v-if="$store.state.weatherInformation.isDay" src="../images/day.svg" alt="Day image">
    <img v-else src="../images/night.svg" alt="Night image">
  </div>
</template>

<script>
  export default {
    name: 'dayNight',
  }
</script>