<template>
  <div class="view-all">
    <pg-filters></pg-filters>
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
import FilterOptions from '@/components/FilterOptions';

export default {
  name: 'ViewAll',
  components: {
    'pg-button': Button,
    'pg-filters': FilterOptions,
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
  position: relative;
  float: left;
  width: 300px;
  height: 300px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}
.shadowed {
    -webkit-box-shadow: 0 10px 6px -6px #777;
       -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
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
