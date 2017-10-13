// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 CSS
import headmenu from './components/HeadMenu.vue'
import leftmenu from './components/LeftMenu.vue'
import axios from 'axios'
import './assets/blog.css'

//Vue.use(axios);
Vue.use(iView);

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.component('headmenu', headmenu);
Vue.component('leftmenu', leftmenu);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App,
        headmenu,
        leftmenu
    }
})
