<template>
  <section class='container'>
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-qiita
      </h1>
      <div class='qlist'>
        <h2 class="title">{{ user.id }}</h2>
        <img :src="user.profile_image_url" :alt='`${user.id}`' width="120" class="qimg">
        <p class="qbody">{{ user.description || 'No description' }}</p>
        <p class="qurl"><nuxt-link to="/" class="button--green"><small>トップへ戻る</small></nuxt-link></p>
        <h3 class="qtitle">{{user.id}}さんの投稿一覧</h3>
      </div>
      <ul class="qlists">
        <li v-for="item in items" :key="item.id" class="qlist">
          <h4 class="qtitle"><span>{{ item.title }}</span></h4>
          <div class="qbody">{{ item.body.slice(0,200) }}....</div>
          <p class="qurl">参考Qiitaページ : <a :href="`${ item.url }`" target="_blank">{{ item.url }}</a></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  async asyncData({ route, app }) {
    const user  = await app.$axios.$get(`https://qiita.com/api/v2/users/${route.params.id}`)
    const items = await app.$axios.$get(`https://qiita.com/api/v2/items?query=user:${route.params.id}`)
    return { user, items }
  }
}
</script>