<template>
  <div class="view-all">
    <li v-for='(photo, index) in showAll' v-bind:key=index>
      <img :src='photo.src' :alt='photo.alt'/>
    </li>
  </div>
</template>

<script>

export default {
  name: 'ViewAll',
  data: () => ({
    msg: 'hello',
    photos: [],
  }),
  computed: {
    showAll() {
      return this.$store.getters.photos;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

img {
  width: 300px;
  border-radius: 20px;
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
footer {
  position: relative;
  bottom: -400px;
  font-size: 12px;
}
</style>
