import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入Kindle样式
import './assets/styles/kindle-variables.css'
import './assets/styles/kindle.css'
import './assets/styles/kindle-components.css'

// 导入Kindle主题检测
import { applyKindleTheme } from './plugins/helper'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // 应用启动时检测并应用Kindle主题
    applyKindleTheme()
  }
}).$mount('#app')



