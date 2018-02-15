<template>
  <div id='home-view'>
    <h2>Welcome to Symba's World</h2>
    <img class='home-photo' :src='homePhoto.src' :alt='homePhoto.alt' />
    <pg-button :clicked='clicked' text='Enter'></pg-button>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: 'LandingPage',
  components: {
    'pg-button': Button,
  },
  computed: {
    homePhoto() {
      return this.$store.state.homePagePhoto;
    },
  },
};
</script>

<style scoped>

.home-photo {
  text-align: center;
  height: 450px;
  border-radius: 20px;
  border: 2px solid #42b983;

}
</style>
