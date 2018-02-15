<template>
  <div class='about'>
    <h1>What's this app?</h1>
    <h2>About Symba</h2>
    <p>{{ text }}</p>
    <h2>The Code</h2>
    <p>Github repo: <a :href='links[0].url' target=_blank> Link</a></p>
    <p>{{ text }}</p>
    <h2>Contact</h2>
    <p>Github: webbkyr</p>
    <p>Twitter: kayrwebb</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    text: 'Born August 25, 2015',
    links: [
      {name: 'Github', url: 'https://github.com/webbkyr/SymbasGallery'}
    ]
  }),
};
</script>

<style scoped>
.about {
  margin: 0 auto;
  padding: 5px;
}
h2 {
  font-weight: normal;
}

</style>
