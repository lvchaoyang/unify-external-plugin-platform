import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Unify-plugin为自定义组件库名称
// @ts-ignore
import ExternalPlugin from '../packages'


Vue.use(ElementUI); // 暂时完整引入
Vue.use(ExternalPlugin); // 暂时完整引入
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
