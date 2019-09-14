<template>
    <search/>
</template>

<script>
import landing from './components/landing.vue'
import loginComerc from "./components/loginComerc.vue"
import search from "./components/search.vue"


export default {
  name: 'app',
  components: {
    landing,
    loginComerc,
    search
  }
}
</script>

<style>
@import url("/style/style.css");

</style>
