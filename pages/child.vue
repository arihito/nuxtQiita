<template>
  <section class="container">
    <div>
      <app-logo class="qlogo" />
      <h1 class="title">
        nuxt-qiita
      </h1>
      <h2 class="subtitle">
        Child Page
      </h2>
      <p class="qurl"><nuxt-link to="/" class="button--green"><small>トップへ戻る</small></nuxt-link></p>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    AppLogo
  },
  layout: 'single'
}
</script>

