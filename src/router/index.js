import Vue from 'vue';
import Router from 'vue-router';
import ViewAll from '@/components/ViewAll';
// import Header from '@/components/Header';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewAll',
      component: ViewAll,
    },
  ],
});
