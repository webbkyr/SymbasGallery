import Vue from 'vue';
import Router from 'vue-router';
import ViewAll from '@/components/ViewAll';
import About from '@/components/About';
import Slideshow from '@/components/Slideshow';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewAll',
      component: ViewAll,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/slideshow',
      name: 'Slideshow',
      component: Slideshow
    }
  ],
});
