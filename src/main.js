// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import symbaPhotos from './assets/symba.json';
// import seedData from './assets/seed.json';

Vue.use(Vuex);
Vue.config.productionTip = false;

/* eslint-disable no-new */

const store = new Vuex.Store({
  state: {
    photos: [...symbaPhotos],
  },
  getters: {
    photos: state => state.photos.map(photo => ({ src: photo.src, alt: photo.alt })),
    selectedPhoto: state => state.photos.filter((photo, value) => {
      if (photo[value] === photo) {
        return photo;
      }
      return photo;
    }),
  },
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
