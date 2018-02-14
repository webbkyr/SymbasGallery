<template>
  <div class="view-all">
    <li v-for='(photo, index) in showAll' v-bind:key=index>
      <img class='shadowed' :src='photo.src' :alt='photo.alt'/>
    </li>
    <div class='button-container'>
      <pg-button :clicked='beginSlideshow' text='Slideshow'></pg-button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: 'ViewAll',
  // data: () => ({
  //   photos: [],
  // }),
  components: {
    'pg-button': Button,
  },
  computed: {
    showAll() {
      return this.$store.getters.photos;
    },
  },
  methods: {
    beginSlideshow() {
      this.$router.push('slideshow');
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
  max-height: 400px;
  border-radius: 20px;
}
/* .shadowed {
    -webkit-box-shadow: 0 10px 6px -6px #777;
       -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
} */
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
