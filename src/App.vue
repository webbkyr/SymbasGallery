<template>
  <div id="app">
    <pg-header></pg-header>
    <transition name='slide-fade'>
      <router-view/>
    </transition>
    <div class='clear'></div>
    <pg-footer></pg-footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    'pg-header': Header,
    'pg-footer': Footer,
  },
};
</script>

<style>
body {
    background-color: #F5E1DA;

}
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 50px;

}
.clear {
  clear: both;
  height: 60px;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .1 ease-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
