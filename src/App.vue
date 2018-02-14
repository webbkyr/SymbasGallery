<template>
  <div id="app">
    <pg-header></pg-header>
    <router-view/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
.clear {
  clear: both;
  height: 60px;
}
</style>
