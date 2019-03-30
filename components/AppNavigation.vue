<template>
  <div class='wrap'>
    <ul class="gnav">
      <li><nuxt-link to="/">トップ</nuxt-link></li>
      <li><nuxt-link to="/child">子ページ</nuxt-link></li>
    </ul>
  </div>
</template>

<style>
.wrap {
  width: 100%;
  background-color: #3b8070;
  height: 46px;
  position: fixed;
  z-index: 10;
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
  color: #02061a;
  padding-top: 14px;
  font-size: 12px;
  height: 46px;
  text-decoration: none;
}
.gnav li a:hover {
  background-color: #41B883;
}
</style>
