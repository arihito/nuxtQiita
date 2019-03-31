<template>
  <main class="container">
    <section class='contents'>
      <h2 class="stitle">ログインページ</h2>
      <p class="qp">一度ログインを行えば「トップ」や「会員」ページが閲覧可能になります。<br>
      また、ログイン済みの場合はこのページにはアクセスできなくなります。</p>
      <p><button @click="login" class="button--grey">ログイン</button></p>
    </section>
  </main>
</template>

<script>
import Cookies from 'universal-cookie'

export default {
  layout: 'single',
  methods: {
    login() {
      const cookies = new Cookies()
      cookies.set('credential', 'true', { maxAge: 90 })
      this.$router.push("/")
    }
  }
}
</script>

