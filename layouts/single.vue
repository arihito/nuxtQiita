<template>
  <div>
    <AppNavigation />
    <div class='hero'>
      <App-logo />
      <GrobalHeader />
    </div>
    <nuxt />
    <footer>footer</footer>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import GrobalHeader from '~/components/GrobalHeader.vue'
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  components: {
    AppLogo,
    GrobalHeader,
    AppNavigation
  }
}
</script>
