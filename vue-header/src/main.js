import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import router from './router'
import vuetify from './plugins/vuetify';

import App from './App.vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    render(h) {
      return h(App, {
        props: {},
      });
    },
    vuetify,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
