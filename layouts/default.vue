<template>
  <div>
    <AppNavigation />
    <div class='center'>
      <App-logo />
      <GrobalHeader />
    </div>
    <nuxt/>
    <footer>
      footer
    </footer>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'
import GrobalHeader from '~/components/GrobalHeader.vue'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo,
    AppNavigation,
    GrobalHeader
  }
}
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: linear-gradient(#05192e, #02061a );
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.qlogo {
  margin-top: 100px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.center {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 80px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.links {
  padding-top: 15px;
}
.qlists {
  width: 1000px;
  padding: 5px 0;
  list-style-type: none;
  color: #35495e;
  background-color: #c5e9de;
}
.qlist {
  margin: 30px;
  padding: 10px 30px;
  text-align: left;
  border-radius: 2px;
  border: 1px solid #35495e;
  background-color: #fff;
  box-shadow: 0 0 3px #65594e;
}
.qtitle {
  margin: 21px 0;
  font-size: 28px;
}
.qtitle a {
  text-decoration: none;
  color: #35495e;
}
.qtitle a:hover {
  color: #3b8070;
  background: linear-gradient(transparent 60%, #ffff66 0%);
  transition: all .5s ease;
}
.qtitlebox {
  overflow: hidden;
}
.qtitlebox img {
  float: left;
  margin: 20px 10px 0 0;
  width: 60px;
}
.qbody {
  font-size: 14px;
  line-height: 2;
  text-align: justify;
  border-top: 1px dotted #35495e;
  margin: 10px 0 0;
  padding: 10px;
}
.qurl {
  font-size: 10px;
  color: #65594e;
}
</style>

