<template>
  <div class='main-header'>
    <h1>{{ text }}</h1>
    <p class='nav'> <router-link to='/'>{{ viewHome }}</router-link></p> |
    <p class='nav' > <router-link to='about'> {{ viewAbout }}</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Pg-Header',
  data() {
    return {
      text: 'Symba\'s Photogallery',
      viewAbout: 'About',
      viewHome: 'Home',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h1 {
  font-size: 42px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color:#40A798;

}
.main-header {
  margin-bottom: 10px;
}
.nav {
  display: inline;
  padding: 10px;
  font-size: 16px;

}

</style>
