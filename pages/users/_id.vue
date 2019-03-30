<template>
  <section class="container">
    <div>
      <div class='qlists'>
        <div class='qdesc'>
          <img :src="user.profile_image_url" :alt='`${user.id}`' class="qimg">
          <h2 class="qauthor">[ {{ user.id }} ]</h2>
          <p class="qbody">{{ user.description || 'No description' }}</p>
        </div>
      </div>
      <ul class="qlists">
        <li v-for="item in items" :key="item.id" class="qlist">
          <h4 class="qtitle"><a :href="`${ item.url }`" target="_blank">{{ item.title }}</a></h4>
          <small>{{ item.created_at.substr(0,10) }}</small>
          <div class="qbody">{{ item.body.slice(0,400) }}....</div>
          <p class="qurl">参考Qiitaページ : <a :href="`${ item.url }`" target="_blank">{{ item.url }}</a></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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

<style>
.qauthor {
  font-size: 15px;
  font-weight: normal;
  line-height: 1;
  text-align: left;
}
.qauthor + .qbody {
  margin-left: 100px;
}
.qdesc {
  padding: 30px 30px 0;
  overflow: hidden;
}
.qimg {
  width: 100px;
  margin-right: 20px;
  float: left;
  border: 1px solid #35495e;
  padding: 3px;
}
</style>
