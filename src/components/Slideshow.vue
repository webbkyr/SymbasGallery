<template>
  <div class='slideshow'>
    <transition name='slide'>
    <img class='shadowed' :src='currentPhoto.src' :alt='currentPhoto.alt' :key='currentPhoto.id' />
    </transition>
    <div></div>
    <pg-button class='sldshw__b' :clicked='prevPhoto' text='Prev Photo'></pg-button>
    <pg-button class='sldshw__b' :clicked='nextPhoto' text='Next Photo'></pg-button>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: 'Slideshow',
  components: {
    'pg-button': Button,
  },
  computed: {
    currentPhoto() {
      return this.$store.getters.selectedPhoto;
    },
    currentPhotoId() {
      return this.$store.state.currentPhoto;
    },
  },
  methods: {
    prevPhoto() {
      this.$store.commit('prevPhoto');
    },
    nextPhoto() {
      this.$store.commit('nextPhoto');
    },
  },
};
</script>

<style scoped>
img {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 450px;
  height: 500px;
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
.sldshw__b {
  margin: 10px;
  padding: 10px;
  display: inline-block;
}
.slide-enter-active {
  transition: all 1s ease-in;
}
.slide-leave-active {
  transition: all .2 ease-out;
}
.slide-enter, .slide-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
