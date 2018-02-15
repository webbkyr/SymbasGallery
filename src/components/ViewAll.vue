<template>
  <div class="view-all">
    <pg-filters></pg-filters>
  <ul>
    <li v-show='$store.state.puppyChecked && $store.state.showAllPhotos === false' 
        v-for='(photo, index) in puppyPhotos'>
      <img class='shadowed' :src='photo.src' :alt='photo.alt'/>
    </li>
    <li v-show='$store.state.adultChecked && $store.state.showAllPhotos == false' 
        v-for='(photo, index) in adultPhotos'>
      <img class='shadowed' :src='photo.src' :alt='photo.alt'/>
    </li>
    <transition-group name='allPhotos' tag='li'>
      <li v-show='$store.state.showAllPhotos'
            v-for='(photo, index) in showAll' :key=index>
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
  data: () => ({
    show: true,
  }),
  components: {
    'pg-button': Button,
    'pg-filters': FilterOptions,
  },
  computed: {
    showAll() {
      return this.$store.getters.photos;
      },
    puppyPhotos() {
      return this.$store.getters.puppyPhotos;
    },
    adultPhotos() {
      return this.$store.getters.adultPhotos;
    },
  },
  methods: {
    beginSlideshow() {
      this.$router.push('slideshow');
    },
    hideEl() {
      if (!this.$store.state.showAllPhotos) {
        this.isHidden = !this.isHidden;
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* li {
  display: block;
  visibility: visible;
  opacity: 1;
  animation: fade 1s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */

.allPhotos-enter-active, .allPhotos-leave-active {
  transition: all 1s;
}
.allPhotos-enter, .allPhotos-leave-to {
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
