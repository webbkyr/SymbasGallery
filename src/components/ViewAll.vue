<template>
  <div class="view-all">
    <pg-filters></pg-filters>
     <ul>
      <transition-group name='fade' tag='li'>
        <li  v-for='photo in activePhotos' :key='photo.id'>
          <img class='shadowed grow' :src='photo.src' :alt='photo.alt' :title='photo.alt'/>
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

@media (max-width: 700px) {
  .view-all {
    width: 350px;
  }
  ul, li, img {
    width: 350px;
    margin: 0 auto;
  }
}

.view-all {
  margin: 0 auto;
}

.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-active {
  transition: all .1s ease-out;
}

.fade-enter, .fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
h1, h2 {
  font-weight: normal;
}

img {
  position: relative;
  float: left;
  width: 330px;
  height: 350px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  margin: 0 auto;
  margin: 10px;
}
img:hover {
  transition-duration: 0.4s;
  border: 2px solid #42b983;
}
.grow {
  transition: all .2s ease-in-out;
}
.grow:hover {
  transform: scale(1.1);
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
  margin: 0 auto;
}
a {
  color: #42b983;
}
</style>
