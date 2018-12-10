// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/index.sass'
// 引入jquery
import jQuery from 'jquery'
// 引入bootstrap
import './assets/js/bootstrap/js/bootstrap.min.js'
import './assets/js/bootstrap/css/bootstrap.min.css'
import './assets/css/main.scss'
// 引入iconfont1
import './assets/iconfont/iconfont.css'


Vue.config.productionTip = false


// Vue.prototype.$echarts = echarts


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
