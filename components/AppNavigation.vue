<template>
  <div class='wrap'>
    <ul class="gnav">
      <li><nuxt-link to="/">トップ</nuxt-link></li>
      <li><nuxt-link to="/login">ログイン</nuxt-link></li>
      <li><nuxt-link to="/child">会員ページ</nuxt-link></li>
      <li><a href="https://ja.nuxtjs.org/guide/" target="_blank">Nuxt.js日本公式</a></li>
      <li><a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt.js GitHub</a></li>
    </ul>
  </div>
</template>

<style>
.wrap {
  width: 100%;
  background-color: #35495e;
  height: 46px;
  position: fixed;
  z-index: 10;
  box-shadow: 0 2px 3px #1e2b38;
}
.gnav {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  padding: 0;
  list-style-type: none;
}
.gnav li {
  width: 20%;
  text-align: center;
}
.gnav li a {
  display: block;
  color: #41B883;
  padding-top: 14px;
  font-size: 12px;
  font-weight: bold;
  height: 46px;
  text-decoration: none;
}
.gnav li a:hover {
  background-color: #41B883;
  color: #fff;
}
.gnav li a[href^=http]::after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 5px;
  background: url("../assets/images/blank.png") 0 0 no-repeat / cover;
}
.gnav li a[href^=http]::after:hover {
  background-position: 0 -10px;
}
</style>
