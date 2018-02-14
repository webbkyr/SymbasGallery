<template>
  <div class='slideshow'>
    <img :src='currentPhoto.src' :alt='currentPhoto.alt' />
    <p>{{ currentPhotoId }}</p>
    <pg-button :clicked='prevPhoto' text='Prev Photo'></pg-button>
    <pg-button :clicked='nextPhoto' text='Next Photo'></pg-button>
    <!-- when slideshow is clicked, show this component with each photo one by one
    show button component with next and prev
    commit actions when clicked to the button component
     -->
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
      console.log(this.$store.getters.selectedPhoto);
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
  // commit actions to the state for the 'next photo' and 'prev photo'
};
</script>

<style>
img {
  width: 300px;
  max-height: 400px;
  border-radius: 20px;
}
</style>
