// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Serve from './api/serve';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI);
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.$services = Serve;
const store = new Vuex.Store({
  state: {
    hasPath: '/'
  }
});

router.afterEach(function (route) {
  store.state.hasPath = route.path;
  if (route.meta) {
    document.title = route.meta;
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
