<template>
  <div>
    <nuxt/>
  </div>
</template>

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
}

.links {
  padding-top: 15px;
}
.qlists {
  width: 600px;
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
.qtitlebox {
  overflow: hidden;
}
.qtitlebox img {
  float: left;
  margin: 20px 10px 0 0;
  width: 60px;
}
a {
  text-decoration: none;
  color: #35495e;
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
.qauthor {
  font-size: 24px;
  font-weight: normal;
  margin-top: 36px;
}
.qdesc {
  padding: 30px;
  display: flex;
}
.qimg {
  border: 1px solid #35495e;
  padding: 3px;
}
</style>

