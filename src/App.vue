<template>
  <div id="app">
    <!-- <router-view/> -->
    <Map />
  </div>
</template>

<script>
import Map from '@/components/map/map2.vue'

export default {
  name: 'app',
  components: {
    Map
  }
}
</script>

<style>
@import url("/style/style.css");

</style>
