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
          <h4 class="qtitle">
            <span>{{ item.title }}</span>
            <small>： {{ item.user.id }}</small>
          </h4>
          <small>{{ item.created_at }}</small>
          <div class="qbody">{{ item.body.slice(0,200)}}....</div>
          <p><a :href='item.url'>{{ item.url }}</a></p>
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

