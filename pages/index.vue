<template>
  <main class="container">
    <section class="contents">
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
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store }) {
    if (store.getters['items'].length) {
      return
    }
    await store.dispatch('fetchItems')
  },
  computed: {
    ...mapGetters(['items'])
  }
}
</script>

