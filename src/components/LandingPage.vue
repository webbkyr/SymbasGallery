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

@media (max-width: 700px ) {
  .home-view {
    width: 650px;
  }
  .home-photo {
    width: 300px;
    margin: 0 auto;
  }
}
.home-photo {
  margin-top: 30px;
  text-align: center;
  height: 450px;
  border-radius: 20px;
  border: 5px solid #42b983;

}
</style>
