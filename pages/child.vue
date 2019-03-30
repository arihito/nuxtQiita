<template>
  <section class="container">
    <div>
      <app-logo class="qlogo" />
      <GrobalHeader />
      <p class="qurl"><nuxt-link to="/" class="button--green"><small>トップへ戻る</small></nuxt-link></p>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import GrobalHeader from '~/components/GrobalHeader.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    AppLogo,
    GrobalHeader
  },
  layout: 'single'
}
</script>

