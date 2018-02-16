<template>
  <div class="view-all">
    <pg-filters></pg-filters>
  <ul>
    <!-- <transition-group name='onlyPuppyPhotos' tag='li'>
      <li v-show='$store.state.puppyChecked && $store.state.showAllPhotos === false'
          v-for='(photo, index) in puppyPhotos' :key=index>
        <img class='shadowed' :src='photo.src' :alt='photo.alt'/>
      </li>
    </transition-group>
    <transition-group name='onlyAdultPhotos' tag='li'>
        <li v-show='$store.state.adultChecked && $store.state.showAllPhotos == false'
            v-for='(photo, index) in adultPhotos' :key=index>
          <img class='shadowed' :src='photo.src' :alt='photo.alt'/>
        </li>
    </transition-group> -->
   <transition-group name='showActivePhotos' tag='li'>
        <li v-for='(photo, index) in activePhotos' :key=index>
          <img class='shadowed' :src='photo.src' :alt='photo.alt'/>
        </li>
  </transition-group>
  </ul>
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
  data() {
    return {
      showPhotos: true,
    };
  },
  components: {
    'pg-button': Button,
    'pg-filters': FilterOptions,
  },
  computed: {
    activePhotos() {
      return this.$store.getters.activePhotos;
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
.showActivePhotos-enter-active {
  transition: all .5s ease;
}
.showActivePhotos-enter {
  opacity: 0;
}
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
  margin: 10px;
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
