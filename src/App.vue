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
</style>
