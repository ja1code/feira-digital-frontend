<template>
    <landing/>
</template>

<script>
import landing from './components/landing.vue'
import loginComerc from "./components/loginComerc.vue"

export default {
  name: 'app',
  components: {
    landing,
    loginComerc
  }
}
</script>

<style>
@import url("/style/style.css");

</style>
