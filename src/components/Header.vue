<template>
  <div class='main-header'>
    <h1>{{ text }}</h1>
    <p> <router-link to='about'> {{ viewAbout }}</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Pg-Header',
  data() {
    return {
      text: 'Symba\'s Gallery',
      viewAbout: 'About page',
      links: { aboutLink: '/about' },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
  color: #42b983;
}
</style>
