<template>
  <div>
    <AppNavigation />
    <nuxt />
    <footer>footer</footer>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  components: {
    AppNavigation
  }
}
</script>
