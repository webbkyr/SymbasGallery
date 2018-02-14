<template>
  <div class='slideshow'>
    <img class='shadowed' :src='currentPhoto.src' :alt='currentPhoto.alt' />
    <p>{{ currentPhotoId }}</p>
    <pg-button :clicked='prevPhoto' text='Prev Photo'></pg-button>
    <pg-button :clicked='nextPhoto' text='Next Photo'></pg-button>
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
  /* position: relative;
  float: left; */
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
</style>
