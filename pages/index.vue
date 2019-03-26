<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-qiita
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <ul class="qlists">
        <li v-for="item in items" :key="item.id" class="qlist">
          <div class='qtitlebox'>
            <img :src="item.user.profile_image_url" :alt='`${item.user.id}`' class="qimg">
            <h4 class="qtitle"><nuxt-link :to="`/users/${item.user.id}`">{{ item.title }}</nuxt-link></h4>
          </div>
          <small>{{ item.user.id }} | {{ item.created_at.substr(0,10) }}</small>
          <div class="qbody">{{ item.body.slice(0,200)}}....</div>
          <p class="qurl">参考Qiitaページ : <a :href="`${ item.url }`" target="_blank">{{ item.url }}</a></p>
        </li>
      </ul>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  async asyncData({ app }) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js')
    return { items }
  }
}
</script>

