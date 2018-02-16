<template>
  <div id='home-view'>
    <img class='home-photo' :src='homePhoto.src' :alt='homePhoto.alt' />
    <pg-button :clicked='enterSite' text='Enter'></pg-button>
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
  methods: {
    enterSite() {
      this.$router.push('/photos');
    },
  },
};
</script>

<style scoped>

.home-photo {
  text-align: center;
  height: 450px;
  border-radius: 20px;
  border: 5px solid #42b983;

}
</style>
