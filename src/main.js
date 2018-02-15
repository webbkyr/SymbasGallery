// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import symbaPhotos from './assets/symba.json';

Vue.use(Vuex);
Vue.config.productionTip = false;

/* eslint-disable no-new */

const store = new Vuex.Store({
  state: {
    photos: [...symbaPhotos],
    currentPhoto: 0,
    showAllPhotos: true,
    puppyChecked: false,
    adultChecked: false
  },
  getters: {
    photos: state => state.photos.map(photo => ({ src: photo.src, alt: photo.alt })),
    selectedPhoto: state => state.photos.find((photo, index) => index === state.currentPhoto),
    puppyPhotos: state => state.photos.filter(photo => photo.category === 'puppy'),
    adultPhotos: state => state.photos.filter(photo => photo.category === 'adult'),
  },
  mutations: {
    nextPhoto(state) {
      if (state.currentPhoto !== state.photos.length - 1) {
        state.currentPhoto += 1;
      } else {
        state.currentPhoto = 0;
      }
    },
    prevPhoto(state) {
      if (state.currentPhoto !== 0) {
        state.currentPhoto -= 1;
      } else {
        state.currentPhoto = state.photos.length - 1;
      }
    },
    toggleShowAll(state) {
      state.showAllPhotos = !state.showAllPhotos;
    },
    togglePuppy(state, boolean) {
      if (boolean === true) {
        state.puppyChecked = true;
      } 
      else {
        state.puppyChecked = false;
      };
    },
    toggleAdult(state) {
      state.adultPhotosOnly = !state.showAllPhotos;
    },
  },
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
