<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-qiita
      </h1>
      <div class='qlists'>
        <h2 class="qauthor">{{ user.id }}</h2>
        <div class='qdesc'>
          <img :src="user.profile_image_url" :alt='`${user.id}`' class="qimg">
          <p class="qbody">{{ user.description || 'No description' }}</p>
        </div>
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
import { mapGetters } from 'vuex'

export default {
  components: {
    AppLogo
  },
  head() {
    return {
      title: this.user.id
    }
  },
  async asyncData({ route, store, redirect }) {
    if (store.getters['users'][route.params.id]) {
      return
    }
    try {
      await store.dispatch('fetchUserInfo', { id: route.params.id })
    } catch (e) {
      redirect('/')
    }
  },
  computed: {
    user() {
      return this.users[this.$route.params.id]
    },
    items() {
      return this.userItems[this.$route.params.id] || []
    },
    ...mapGetters(['users', 'userItems'])
  }
}
</script>