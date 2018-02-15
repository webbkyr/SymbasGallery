import Vue from 'vue';
import Router from 'vue-router';
import ViewAll from '@/components/ViewAll';
import About from '@/components/About';
import Slideshow from '@/components/Slideshow';
import LandingPage from '@/components/LandingPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: LandingPage,
      component: LandingPage,
    },
    {
      path: '/photos',
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
      component: Slideshow,
    },
  ],
});
